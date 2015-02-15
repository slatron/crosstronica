var gulp = require('gulp');

gulp.task('json', function() {
  return gulp.src('dev/**/*.json')
    .pipe(gulp.dest('express-project/public'));
});
