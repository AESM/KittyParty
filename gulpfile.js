// gulpfile.js

////= RAPTORSMACSS Gulp Tasks
//===========================================================================//

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util');

var chalk = gutil.colors,
    destination = gulp.dest,
    greenChalk = chalk.green,
    redChalk = chalk.red,
    highlightChalk = chalk.cyan.underline.bgBlue,
    log = gutil.log,
    timestamp = (new Date()).toString();

var input = {
      'js': './source/js/**/*.js',
      'mainscss': './source/scss/raptor.scss',
      'scss': './source/scss/**/*.scss',
      'vendorjs': './assets/javascripts/vendors/**/*.js'
    },
    output = {
      'stylesheets': './assets/stylesheets',
      'javascripts': './assets/javascripts'
    };

//== Functions ===============================================================/

/// Prevents `watch` from breaking because of errors
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

//== Style Task ==============================================================/

gulp.task('raptor-style', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based', redChalk('stylesheet'), 'at', greenChalk(timestamp));
  return gulp.src(input.mainscss)
    .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded'
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

//== Script Task =============================================================/

gulp.task('raptor-script', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based', redChalk('JavaScript'), 'file at', greenChalk(timestamp));
  return gulp.src([input.vendorjs, input.js])
    .pipe(sourcemaps.init())
      .pipe(concat('raptor.js'))
      .on('error', handleError)
      .pipe(destination(output.javascripts))
    .pipe(sourcemaps.write('./'))
    .pipe(destination(output.javascripts));
});

//== Management Tasks ========================================================/

gulp.task('watch', function() {
  log('Watching for changes in the', highlightChalk('RAPTORSMACSS'), redChalk('SCSS'), 'and', redChalk('JS'), 'files...');
  gulp.watch(input.scss, ['raptor-style']);
  gulp.watch(input.js, ['raptor-script']);
});

gulp.task('default', ['watch', 'raptor-style', 'raptor-script']);

gulp.task('build', ['raptor-style', 'raptor-script']);

gulp.task('raptor', ['watch', 'raptor-style', 'raptor-script']);
