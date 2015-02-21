var gulp = require('gulp'),
    del  = require('del');

gulp.task('clean', function(cb) {
    del(
      ['express-project/public/assets/css',
       'express-project/public/assets/js',
       'express-project/public/assets/images',
       'express-project/public/index.html',
       'express-project/public/**/*.html'
      ], cb)
});
