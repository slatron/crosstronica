var gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    ngAnnotate   = require('gulp-ng-annotate'),
    handleErrors = require('../util/handleErrors');

gulp.task('scripts', function() {
  return gulp.src(
      /**
      * Gather angular-base first,
      * then vendor files,
      * then main angular app declaration,
      * then all angular modules
      */
      [
        'dev/js/angular_base/angular.js',
        'dev/js/vendor/**/*.js',
        'dev/js/main.js',
        'dev/js/angular_app/**/*.js'
      ],
      {base: 'dev/js'}
    )
    .on('error', handleErrors)
    .pipe(concat('main.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'))
});
