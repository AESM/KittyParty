<!-- README.md -->

KittyParty
===============================================================================

A chat program where users send GIFs that correspond with their messages.

Once a user has entered the chat, they can send messages to their peers.  The message will be tokenized and "translated" into a GIF found on [Giphy](giphy.com), which will also be sent in the chat.

At the moment, if a message cannot be properly translated into something found on Giphy, Gene Wilder will tell you that you don't get a special GIF, like so...

![Cannot Translate Message](assets/images/gifs/NOPE.gif)

The notable technologies I worked with include JavaScript (ES6), AngularJS, Node.js, Express.js, Socket.io, jQuery, Sass (SCSS), RAPTORSMACSS, Gulp.js, and the Giphy API.

**WIREFRAME**: To see the project's initial wireframe (HTML5, CSS3, Sass, JavaScript, and jQuery), check out the [wireframe branch](https://github.com/AESM/KittyParty/tree/wireframe).

## Contents

- [Local Usage](#local-usage)
- [ToDos](#todos)
- [Team](#team)
- [License](#license)
- [Connect](#connect)

## Local Usage

### Installation
1. Ensure your computer has the [requirements](#requirements) met
2. Clone the [master branch](https://github.com/AESM/KittyParty) of this repo
3. Change to the root directory of the local clone
4. Run `npm run setup`

### Running KittyParty
1. Change to the root directory of the local clone
2. Run `npm run start`
3. In your browser of choice, go to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) or [http://localhost:8080](http://localhost:8080)
4. _OPTIONAL_: Run `gulp` to watch the SCSS files and compile the CSS stylesheet

### Requirements
- [Node](https://nodejs.org/en/) 5.0.0+
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) 3.0.0+
- [JSPM](http://jspm.io/) 0.16.14+
- [Express](http://expressjs.com/) 4.13.3+

### Optional Requirements
These are the requirements to use the `gulpfile.js` file, as is...

- [Gulp](https://github.com/gulpjs/gulp) 3.9.0+
- [Gulp-CLI](https://github.com/gulpjs/gulp-cli) 1.1.0+

## ToDos

- Cram MongoDB in
- Find out what change happened after Socket.IO 1.3.7, making further versions cause the server to crash after a user disconnects
  + `"socket.io": "1.3.7"` in `package.json` file, rather than `"socket.io": "^1.3.7"`
- Improve message conversion via tokenization
  + The Giphy API is not great at dealing with sentences, so the messages must be tokenized further
    * NLP research
- Create a better response if there is no return GIF
- Include database and deployment
- Create an actual sign-in and login
- Add user profile pictures or Gravatar inclusion

-------------------------------------------------------------------------------

## Team

[The humans responsible and technology colophon](https://github.com/AESM/KittyParty/blob/master/humans.txt).

- **Ali Esmaili** _(Developer & Designer)_: [AESM](https://github.com/AESM)

## License

This [project](#kittyparty) is copyright © 2015-2016 Ali Esmaili | SuitAndCape.  It is free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/AESM/KittyParty/blob/master/LICENSE).

This is based on [The MIT License (MIT)](http://opensource.org/licenses/MIT).  For more information, visit the [Open Source Initiative](http://opensource.org/) website.

## Connect

|               :tophat:               |               :rocket:               |
| ------------------------------------ | ------------------------------------ |
**_SuitAndCape GitHub_** | https://github.com/SuitAndCape
**_Personal GitHub_**    | https://github.com/AESM
**_Website_**            | http://SuitAndCape.github.io/
**_LinkedIn_**           | https://www.linkedin.com/in/SuitAndCape
**_Twitter_**            | https://twitter.com/SuitAndCape
