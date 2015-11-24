<!-- README.md -->

KittyParty
==========================================================================

A chat program where users send GIFs that correspond with their messages.

Once a user has entered the chat, they can send messages to their peers.  The message will be tokenized and "translated" into a GIF found on [Giphy](giphy.com), which will also be sent in the chat.

At the moment, if a message cannot be properly translated into something found on Giphy, Gene Wilder will tell you that you don't get a special GIF, like so...
![Cannot Translate Message](public/assets/images/gifs/NOPE.gif)

The notable technologies I worked with include JavaScript (ES6), AngularJS, Node.js, Express.js, Socket.io, jQuery, Sass (SCSS), RAPTORSMACSS, Gulp.js, and the Giphy API.

**WIREFRAME**: To see the project's initial wireframe (HTML5, CSS3, Sass, JavaScript, and jQuery), check out the [wireframe branch](https://github.com/AESM/KittyParty/tree/wireframe).

## Contents

- [Title](#kittyparty)
- [Usage](#usage)
  + [Installation](#installation)
  + [Running KittyParty](#running-kittyparty)
  + [Requirements](#requirements)
  + [Optional Requirements](#optional-requirements)
- [ToDos](#todos)
- [User Stories, MVP, Specifications, and Pseudocode](#user-stories-mvp-specifications-and-pseudocode)
- [Humans.txt](#humanstxt)
- [License](#license)
- [Connect](#connect)

## Usage

### Installation
1. Ensure your computer has the [requirements](#requirements) met
2. Clone the [master branch](https://github.com/AESM/KittyParty) of this repo
3. Change to the root directory of the local clone
4. Run `npm install`
5. Run `jspm install`

### Running KittyParty
1. Change to the root directory of the local clone
2. Run `node app`
3. In your browser of choice, go to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) or [http://localhost:8080](http://localhost:8080)
4. _OPTIONAL_: Run `gulp` to watch the SCSS files and compile the CSS stylesheet

### Requirements
- [Node](https://nodejs.org/en/) 5.0.0+
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) 3.0.0+
- [JSPM](http://jspm.io/) 0.16.14+
- [Express](http://expressjs.com/) 4.13.3+

### Optional Requirements
These are the requirements to use the `gulpfile.js` file, as is...

- [Ruby](https://www.ruby-lang.org/en/) 1.8.7+
- [Sass](https://github.com/sass/sass) 3.4.0+
- [Gulp](https://github.com/gulpjs/gulp) 3.9.0
- [Gulp-Concat](https://github.com/contra/gulp-concat) 2.6.0
- [Gulp-Minify-CSS](https://github.com/murphydanger/gulp-minify-css) 1.2.1
- [Gulp-Rename](https://github.com/hparra/gulp-rename) 1.2.2
- [Gulp-Sass](https://github.com/dlmanning/gulp-sass) 2.1.0
- [Gulp-Sourcemaps](https://github.com/floridoo/gulp-sourcemaps) 1.6.0
- [Gulp-Util](https://github.com/gulpjs/gulp-util) 3.0.7

## ToDos

- Improve message conversion via tokenization
  + The Giphy API is not great at dealing with sentences, so the messages must be tokenized further
    * NLP research
- Create a better response if there is no return GIF
- Include database and deployment
- Create an actual sign-in and login
- Add user profile pictures or Gravatar inclusion

--------------------------------------------------------------------------

## User Stories, MVP, Specifications, and Pseudocode

To see the process that has been documented for this project, [click here](https://github.com/AESM/KittyParty/blob/master/SMSP.md).

## Humans.txt

[We Are People.  Get to Know Us.](https://github.com/AESM/KittyParty/blob/master/humans.txt)

The humans.txt movement is all about getting to know the people behind a website or project.  To find out more, visit [humanstxt.org](http://humanstxt.org/).

## License

This [project](#kittyparty) is copyright © 2015-2016 Ali Esmaili | SuitAndCape.  It is free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/AESM/KittyParty/blob/master/LICENSE).

This is based on [The MIT License (MIT)](http://opensource.org/licenses/MIT).  For more information, visit the [Open Source Initiative](http://opensource.org/) website.

## Connect

|              :tophat:             |              :rocket:             |
| --------------------------------- | --------------------------------- |
**_SuitAndCape GitHub_** | https://github.com/SuitAndCape
**_Personal GitHub_**    | https://github.com/AESM
**_Website_**            | https://SuitAndCape.github.io/
**_LinkedIn_**           | https://www.linkedin.com/in/SuitAndCape
**_Dribbble_**           | https://dribbble.com/SuitAndCape
**_Twitter_**            | https://twitter.com/SuitAndCape
