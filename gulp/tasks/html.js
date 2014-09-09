var gulp         = require('gulp');

gulp.task('html', function() {
  return gulp.src('dev/**/*.html')
    .pipe(gulp.dest('app'));
});
