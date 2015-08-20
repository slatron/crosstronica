---
layout: post
title:  "My opinionated gulp / angular build"
date:   2014-10-11 17:46:00
categories: gulp angular
desc: I was quite the late bloomer when it came to learning build systems. In my defense, it was never really neseccary for the type of code I was writing.
---

I was quite the late bloomer when it came to learning build systems. In my defense, it was never really neseccary for the type of code I was writing. My background is in building websites for ad agencies. The intent was always to build a system of code that could maintain consistancy between sites. But ever-changing / non-existant requirements and deadlines made putting time into an overriding system challenging.

I've recently been in a better position to create generators for multiple projects. I'm also luckily finding out that front emd build tools have reached a maturity level in 2014 where they do what I expect them to do. In my case that covers javascript, css html and images.

#### Build Tool Expectations

With javascript, I expect to develop from within a subdirectory of /dev/js/ and know that my code will be linted, minified and contatenated into a single request from the browser per page. Or as close to that "utopia" as I can get. My js build tool will also take all additional requirements away. I want to drop js files in a specific folder and not care about compile order beyond that. That could mean that my folders determine the dependency order - and I'm perfectly fine with that. What I don't want is to have to add code to my files to make them "see" each other.

This is why require.js never made sense to me. I had to put so much effort into my manifest file that I always just wanted to include script tags on the HTML over a build system. To be truthful, Grunt made me feel the same way. It just wasn't intuitive enough to be worth it for me. So when Gulp got on my radar, it seemed good enough to give a try.

And Gulp was indeed awesome. Finally, a tool that would behave as I wanted. I could read other developers' gulpfile.js manifests and not be lost. Better yet, I learned more about thr thought process behind the builds the more I read. I spent some time trying to see the fuss behind browserify, but after vanilla gulp lint / concat / minify builds, it didn's seem worth the extra effort to add another tool to the flow. Plus, I'm now pretty frim in the angular developer camp. And angular had dependency injection builr in. Browserify just feels like a reinvention of the wheel for angular, [although it can have it's place][[gulp-setup]. Armed with that in mind, I set up my [gulp ng boilerplate repo][gulp-setup-ng]. [This][gulp-setup-ng] is what I used to create the base for [Crosstronica][crosstronica].

#### Building Beyond Javascript

After the js desions were made for the build, the rest quickly fell into place. I use SCSS for all my css needs with compass in the mix. Gulp handles these easily. Any issues I have always seem to be on the gem side<sup>1</sup>. Gulp can compile my SASS to one CSS file. I then create a minified version and send both to my /app/assets/css/ directory.

HTML and images are simple. I'm not using much of any images these days due to CSS3 awesomeness. I simply move the images on to the /app/assets/images/ directory for now. I'm cool with pre-optimizing my images untill I have a gallery or some other reason to include many images in the project. Same with HTML. I'm not much for HTML preprocessors like HAML. I've been writing HTML for almost 20 years and have no plans to use any general preprocessor. If I was on a larger dev team and saw the need to prevent inline style attributes or other such tomfoolery, that can always be added later. For now, my HTML task jsut moves .html files on to /app/.

By this time, even for a simple build I have several tasks going on. Script, style, image,and html file processors; seperate lint tasks to lint the angular files only or include the vendor files; a watch task to auto-magically update the /app/files as I go; a clean task to clear the /app /directory; a connect task to start a local dev server; and a default task to tie them all together. Yeah it's a lot of processing, but once it's set up I never have to worry about this ever again.

I love this setup for Angular Projects. I can change the directory structure as I go early on in the project. That way, I don't have to worry as much about how my app will scale I can simply drop files around and play with the structure as I go. I'll ususally start with a "directory per module type" approach. This means a controllers, directives and factories directories to begin with. I'll then break off files into directories based on functionaliy instead as I go. Angular dependency injection plus the gulp build makes thes just work for me.

For reference, I'm including my gulp tasks below. Note that I use "require-dir" in my gulpfile.js manifext to collect tasks from /gulp/. That way, each task is located in a single file.

#### My Gulp Tasks

My scripts tasks defines how to put the final main.js file together. I never put more than one script call in my HTML files now. Everything is handled right here in /gulp/scripts.js:

<div code-showhide headline="Gulp Scripts Task">
  <pre>
  var gulp         = require('gulp'),
      uglify       = require('gulp-uglify'),
      rename       = require('gulp-rename'),
      concat       = require('gulp-concat'),
      ngAnnotate   = require('gulp-ng-annotate'),
      handleErrors = require('../util/handleErrors');

  gulp.task('scripts', function() {
    return gulp.src(
        /**
        * Gather angular-base first,
        * then vendor files,
        * then main angular app declaration,
        * then all angular modules
        */
        [
          'dev/js/angular_base/angular.js',
          'dev/js/vendor/**/*.js',
          'dev/js/main.js',
          'dev/js/angular_app/**/*.js'
        ],
        {base: 'dev/js'}
      )
      .on('error', handleErrors)
      .pipe(concat('main.js'))
      .pipe(ngAnnotate())
      .pipe(gulp.dest('app/assets/js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('app/assets/js'))
  });
  </pre>
</div>

Styles is the next most important compiler. Note tht use of autoprefixer here. It makes CSS so much easier to keep up with by using caniuse statistics to add browser prefixes to my selectors:

<div code-showhide headline="Gulp Styles Task">
  <pre>
  var gulp         = require('gulp'),
      compass      = require('gulp-compass'),
      autoprefixer = require('gulp-autoprefixer'),
      minifycss    = require('gulp-minify-css'),
      rename       = require('gulp-rename'),
      handleErrors = require('../util/handleErrors');

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
      .on('error', handleErrors)
      .pipe(gulp.dest('app/assets/css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('app/assets/css'));
  });
  </pre>
</div>

For the rest of my tasks, please see [my github repository][crosstronica-gulp]. In the meantime, I'll be writing the first angular code for the project to move the grid javascript I wrote into an angular factory. I will then set up a controller and html page to visualize the grid outside of the console.

Cheers!

<hr>

<sup>1</sup> | I hate gems, ruby and rails<sup>2</sup>. They are worthless pieces of junk that fail much more often then help out. Unfortunately, I'm kinda tied to them if I want to use SCSS / Compass. Anyone know of a pure node way to compile scss?

<sup>2</sup> | Ember can eat a dick too. No further comment.

[gulp-setup-ng]:  [https://github.com/slatron/gulp-setup-ng]
[gulp-setup]:  [https://github.com/slatron/gulp-setup]
[crosstronica]:  [https://github.com/slatron/crosstronicq]
[crosstronica-gulp]: [https://github.com/slatron/crosstronica/tree/master/gulp]
