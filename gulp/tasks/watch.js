var gulp         = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['dev/js/*.js', 'dev/js/angular_app/**/*.js'], ['lint']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
  gulp.watch('dev/scss/**/*.scss', ['styles']);
  gulp.watch('dev/images/**/*', ['images']);
  gulp.watch('dev/**/*.html', ['html']);
});
