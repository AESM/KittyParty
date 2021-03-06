// app.js

'use strict';

var express = require('express'),
    http = require('http'),
    _ = require('underscore');

var bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    path = require('path');

var app = express(),
    // server = require('http').createServer(app),
    server = require('http').Server(app),
    // io = require('socket.io').listen(server),
    io = require('socket.io').listen(server);

var buddies = [],
    messages = [],
    userCounter = 1;

app.set('port', process.env.PORT || 8080);

app.use(logger('dev'));

app.use(methodOverride());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(express.static(__dirname, './'));
app.use(express.static(path.join(__dirname, './')));

server.listen(app.get('port'), function() {
  console.log('Server running at http://127.0.0.1:' + app.get('port'), 'in', app.get('env'), 'mode');
});
// server.listen(config.port, function () {
//   console.log('Server running at http://127.0.0.1:', config.port, 'in', app.get('env'), 'mode');
// });

function mostRecentMessages() {
  return messages.slice(messages.length-20, messages.length);
}

/// Post the user's message and the corresponding Giphy GIF
app.post('/messages', function(request, response) {
  var message = request.body.message,
      addressReadableMessage = (message.split(' ').join('+')).toLowerCase(),
      giphy = 'http://api.giphy.com/',
      versionOne = 'v1/',
      search = 'gifs/search?q=' + addressReadableMessage + '&',
      translate = 'gifs/translate?s=' + addressReadableMessage + '&',
      betaKey = 'api_key=dc6zaTOxFJmzC',
      messageGiphyAPI = giphy + versionOne + translate + betaKey;

  /// Get the Giphy API URL
  http.get((messageGiphyAPI), function(res) {
    /// Store and concat the pieces of the response body streaming in
    var responseBody = '';
    console.log('messageGiphyAPI status in func -', res.statusCode);
    res.on('data', function(dataChunk) {
      responseBody += dataChunk;
    });

    /// Capture the desired GIF URL when the response has fully finished
    res.on('end', function() {
      var giphyJSON = JSON.parse(responseBody).data.images,
          giphyData;

      if(typeof giphyJSON == 'object') {
        giphyData = JSON.parse(responseBody).data.images.original.url;
      } else {
        giphyData = '../../assets/images/gifs/NOPE.gif';
      }

      if(message && message.trim().length > 0) {
        var user_id = request.body.user_id,
            created_at = request.body.created_at,
            user = _.findWhere(buddies, {
              id: user_id
            });

        console.log('Giphy data type –', typeof giphyData);

        console.log('Giphy data URL –', giphyData);

        messages.push({
          message: message,
          user: user,
          type: 'message',
          messageGIF: giphyData,
          created_at: created_at
        });

        /// Inform chat of a new message
        io.sockets.emit('incoming_message', _.last(messages));
        response.status(200).json({
          message: 'Message received'
        });
      } else {
        return response.status(400).json({
          error: 'Invalid message'
        });
      }
    });
  });
});

/// Manage chat connections
io.on('connection', function(socket) {
  socket.on('new_user', function(data) {
    console.log('ON new_user', data);

    var newName = 'User ' + userCounter++;
    buddies.push({
      id: data.id,
      name: newName
    });

    console.log('Messages –', messages);

    console.log('Most recent messages –', mostRecentMessages());

    io.sockets.emit('new_connection', {
      user: {
        id: data.id,
        name: newName
      },
      sender:'system',
      created_at: new Date().toISOString(),
      buddies: buddies,
      messages: mostRecentMessages()
    });

    console.log('Users present –', buddies);
  });

  socket.on('name_change', function(data) {
    console.log('ON name_change', data);

    _.findWhere(buddies, {
      id: socket.id
    }).name = data.name;
    io.sockets.emit('name_changed', {
      id: data.id,
      name: data.name
    });
  });

  socket.on('disconnect', function() {
    console.log('ON disconnect', socket.id);

    var buddy = _.findWhere(buddies, {
      id: socket.id
    });
    buddies = _.without(buddies, buddy);
    io.sockets.emit('user_disconnected', {
      user: {
        id: socket.id,
        name: buddy.name
      },
      sender:'system',
      created_at: new Date().toISOString(),
    });

    console.log('Info of disconnected user -', buddy);
  });
});

if ('development' == app.get('env')) {
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
}
