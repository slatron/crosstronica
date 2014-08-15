# gulp-setup

## What is this?

My default gulp task runner setup for HTML projects. Should be occasionaly updated as I use it. 

### Credit due

Most of this comes from [Mark Goodyear's blog](http://markgoodyear.com/2014/01/getting-started-with-gulp/). I highly recommend it for anyone starting out with gulp.

### Installation

Clone this repo:

```sh
$ git clone git@github.com:slatron/gulp-setup.git
```

Install all required gulp plugins, with <code>npm install</code>: 

```sh
$ npm install gulp-compass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
```

Run gulp

```sh
$ gulp
```

gulp will compile all /js, /scss and /images files to the /dist folder.

### Tasks

To watch for file changes on all /js, /scss and /images files:

```sh
$ gulp watch
```

To clean the /dist folder:

```sh
$ gulp clean
```

To run individual tasks manually:

```sh
$ gulp scripts
$ gulp styles
$ gulp images
```

### Plugin Docs:

[Sass compile | gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass)
[Autoprefixer | gulp-autoprefixer](https://github.com/Metrime/gulp-autoprefixer)
[Minify CSS | gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)
[JSHint | gulp-jshint](https://github.com/wearefractal/gulp-jshint)
[Concatenation | gulp-concat](https://github.com/wearefractal/gulp-concat)
[Uglify | gulp-uglify](https://github.com/terinjokes/gulp-uglify)
[Compress images | gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
[Caching of images so only changed images are compressed | gulp-cache](https://github.com/jgable/gulp-cache)
[Clean files for a clean build | del](https://www.npmjs.org/package/del)

