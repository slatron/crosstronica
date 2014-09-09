var gulp         = require('gulp'),
    del          = require('del');

gulp.task('clean', function(cb) {
    del(
      ['app/assets/css',
       'app/assets/js',
       'app/assets/images',
       'app/index.html',
       'app/templates',
       ], cb)
});
