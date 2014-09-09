var gulp         = require('gulp');

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'lint', 'scripts', 'images', 'html', 'connect', 'watch');
});
