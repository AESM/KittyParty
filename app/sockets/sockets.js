// sockets.js

import Auth from '../auth/auth';

export default class Socket {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.init();
  }

  init() {
    let host = window.location.origin;
    console.log('Socket connecting to', host);

    this.socket = io.connect(host);

    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;

      console.log('Socket connected with session ID', sessionId);

      this.socket.emit('new_user', {
        id: sessionId
      });

      this.socket.on('new_connection', (data) => {
        if (data.user.id === sessionId) {
          this.$rootScope.$apply(() => {
            Auth.setCurrentUser(data.user);
          });
        }
      });
    });

    this.socket.on('error', (error) => {
      console.log('Socket error', error);
    });
  }

  on(key, callback) {
    this.socket.on(key, (data) => {
      console.log('On', key, data);
      this.$rootScope.$apply(() => {
        callback(data);
      });
    });
  }
}

Socket.$inject = ['$rootScope'];
