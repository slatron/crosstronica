var gulp = require('gulp');


gulp.task('images', function() {
  return gulp.src(['dev/images/**/*', '!dev/images/*.md'])
    .pipe(gulp.dest('app/assets/images'));
});
