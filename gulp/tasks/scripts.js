var gulp         = require('gulp'),
    browserify   = require('browserify'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    handleErrors = require('../util/handleErrors');

gulp.task('scripts', function() {
  return browserify('./dev/js/main.js')
    .bundle()
    .on('error', handleErrors)
    .pipe(source('main.js'))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(buffer()) // Preps for ugilfy
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'))
});
