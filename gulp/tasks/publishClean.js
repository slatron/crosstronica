var gulp         = require('gulp'),
    del          = require('del');

gulp.task('publishClean', function(cb) {
    del(
      ['express-project/public',
       'express-project/views/index.ejs'
      ], cb)
});
