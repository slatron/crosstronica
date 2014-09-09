var gulp         = require('gulp'),
    changed      = require('gulp-changed'),
    imagemin     = require('gulp-imagemin');


gulp.task('images', function() {
  return gulp.src(['dev/images/**/*', '!dev/images/*.md'])
    .pipe(changed('app/assets/images'))
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('app/assets/images'));
});
