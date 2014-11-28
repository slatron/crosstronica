var gulp = require('gulp');

gulp.task('publish', ['publishClean'], function() {
  gulp.start('publishAssets', 'publishIndex');
});
