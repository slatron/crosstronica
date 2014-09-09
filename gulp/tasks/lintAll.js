var gulp         = require('gulp'),
    jshint       = require('gulp-jshint');

gulp.task('lintAll', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});
