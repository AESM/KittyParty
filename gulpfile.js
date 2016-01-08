// gulpfile.js

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),

    chalk = gutil.colors,
    destination = gulp.dest,
    greenChalk = chalk.green,
    highlightChalk = chalk.underline.cyan.bgMagenta,
    log = gutil.log,
    timestamp = (new Date()).toString(),

    input = {
      'js': './source/js/**/*.js',
      'mainscss': './source/scss/raptor.scss',
      'scss': './source/scss/**/*.scss',
      'vendorjs': './assets/javascripts/vendors/**/*.js'
    },
    output = {
      'stylesheets': './assets/stylesheets',
      'javascripts': './assets/javascripts'
    };

/// Prevents `watch` from breaking because of errors
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('raptor-css', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based stylesheet at', greenChalk(timestamp));
  return gulp.src(input.mainscss)
    .pipe(sourcemaps.init())
      .pipe(sass({
        style: 'expanded'
      }))
      .on('error', handleError)
      .pipe(destination(output.stylesheets))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(destination(output.stylesheets));
});

gulp.task('raptor-js', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based JavaScript file at', greenChalk(timestamp));
  return gulp.src([input.vendorjs, input.js])
    .pipe(sourcemaps.init())
      .pipe(concat('raptor.js'))
      .on('error', handleError)
      .pipe(destination(output.javascripts))
    .pipe(sourcemaps.write('./'))
    .pipe(destination(output.javascripts));
});

gulp.task('watch', function() {
  log('Watching for changes in the', highlightChalk('RAPTORSMACSS'), 'SCSS and JS files...');
  gulp.watch(input.scss, ['raptor-css']);
  gulp.watch(input.js, ['raptor-js']);
});

gulp.task('raptor-build', ['raptor-css', 'raptor-js']);

gulp.task('default', ['raptor-build', 'watch']);
