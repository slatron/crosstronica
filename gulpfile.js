// Most of this comes from Mark Goodyear's blog:
// http://markgoodyear.com/2014/01/getting-started-with-gulp/

// To install gulp:
// $ npm install gulp --save-dev

// To install all required gulp plugins, run:
// $ npm install gulp-compass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev

var gulp         = require('gulp'),
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

// I'm not a fan of livereload, but might try it again someday
// var livereload   = require('gulp-livereload');

// Use compass to process .scss files
gulp.task('styles', function() {
  return gulp.src('scss/main.scss')
    .pipe(compass({
      css: 'dist/css',
      sass: 'scss',
      image: 'dist/images'
    })).on('error', function(err) {
      console.log(err.message);
    })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

// Run Lint on non-vendor js
gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

// Run Lint on all js
gulp.task('lint-all', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

// concatenate and minify scripts
gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// optimize images
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

// Delete everything in /dist folder
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/images'], cb)
});

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'lint', 'scripts', 'images');
});

// Keeping watch as non-default task
// I like to run this in a seperate window
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('images/**/*', ['images']);
});
