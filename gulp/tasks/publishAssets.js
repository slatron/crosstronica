var gulp         = require('gulp');

gulp.task('publishAssets', function() {
  return gulp.src(
      [
        'app/**/*'
      ],
      {base: 'app'}
    )
    .pipe(gulp.dest('express-project/public'));
});
