// ======================================
// Dependencies
// ======================================
var gulp         = require('gulp'),
    connect      = require('gulp-connect'),
    compass      = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    jshint       = require('gulp-jshint'),
    uglify       = require('gulp-uglify'),
    imagemin     = require('gulp-imagemin'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    cache        = require('gulp-cache'),
    del          = require('del');

// ======================================
// A display error function. Use in pipeline
//   for dependencies that don't include
//   error handling
// ======================================
var displayError = function(error) {

    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;

    console.error(errorString);
}

// ======================================
// Styles
// ======================================
gulp.task('styles', function() {
  return gulp.src('dev/scss/main.scss')
    .pipe(compass({
      css: 'app/assets/css',
      sass: 'dev/scss',
      image: 'app/assets/images'
    }))
    .on('error', function(err) {
      displayError(err);
    })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .on('error', function(err){
        displayError(err);
    })
    .pipe(gulp.dest('app/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('app/assets/css'));
});

// ======================================
// Scripts
// ======================================

// Run Lint on non-vendor js
gulp.task('lint', function() {
  return gulp.src('dev/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
});

// Run Lint on all js
gulp.task('lint-all', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

// concatenate and minify scripts
gulp.task('scripts', function() {
  return gulp.src(
      /**
      * Gather vendor first
      */
      [
        'dev/js/vendor/**/*.js',
        'dev/js/*.js'
      ],
      {base: 'dev/js'}
    )
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .on('error', function(err){
        displayError(err);
    })
    .pipe(gulp.dest('app/assets/js'))
});

// ======================================
// Images
// ======================================

// optimize images
gulp.task('images', function() {
  return gulp.src(['dev/images/**/*', '!dev/images/*.md'])
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('app/assets/images'));
});

// ======================================
// HTML
// ======================================

// Smiply moves over the html, so we can develop
// in the same folder as the js /sass
gulp.task('html', function() {
  return gulp.src('dev/**/*.html')
    .pipe(gulp.dest('app'));
});

// ======================================
// Cleanup
// ======================================

// Delete everything in /app/assets folder
gulp.task('clean', function(cb) {
    del(
      ['app/assets/css',
       'app/assets/js',
       'app/assets/images',
       'app/index.html',
       'app/templates',
       ], cb)
});

// ======================================
// Watch
// ======================================

gulp.task('watch', function() {
  gulp.watch(['dev/js/*.js', 'dev/js/angular_app/**/*.js'], ['lint']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
  gulp.watch('dev/scss/**/*.scss', ['styles']);
  gulp.watch('dev/images/**/*', ['images']);
  gulp.watch('dev/**/*.html', ['html']);
});

// ======================================
// Local Server
// ======================================
gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    port: '2701'
  });
});

// ======================================
// Default ($ gulp)
// ======================================

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'lint', 'scripts', 'images', 'html', 'connect', 'watch');
});
