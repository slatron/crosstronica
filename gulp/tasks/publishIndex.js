var gulp         = require('gulp'),
    rename       = require('gulp-rename');

gulp.task('publishIndex', function() {
  return gulp.src(
      [
        'app/index.html'
      ],
      {base: 'app'}
    )
    .pipe(rename({extname: '.ejs'}))
    .pipe(gulp.dest('express-project/views'));
});
