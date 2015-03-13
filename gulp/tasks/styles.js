var gulp         = require('gulp'),
    compass      = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
  return gulp.src('dev/scss/main.scss')
    .pipe(compass({
      css: 'express-project/public/assets/css',
      sass: 'dev/scss',
      image: 'express-project/public/assets/images'
    }))
    .on('error', function(err) {
      displayError(err);
    })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .on('error', handleErrors)
    .pipe(rename({suffix: '.min'}))
      .on('error', handleErrors)
    .pipe(minifycss())
      .on('error', handleErrors)
    .pipe(gulp.dest('assets/css'))
      .on('error', handleErrors);
});
