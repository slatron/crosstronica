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

Install gulp and all required plugins, with `npm install`:

```sh
$ npm install gulp gulp-compass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
```

Since we are using the compass library to help with scss, be sure the compass gem is installed on your system:

```sh
$ gem update --system
$ gem install compass
```

Run gulp:

```sh
$ gulp
```

gulp will compile all `/js`, `/scss` and `/images` files to the `/dist` folder.

Then, open `/dist/index.html` in a browser.

### Tasks

#### `gulp watch`

To watch for file changes on all `/js`, `/scss` and `/images` files:

```sh
$ gulp watch
```

#### `gulp clean`

To clean the /dist folder:

```sh
$ gulp clean
```

#### `gulp lint`

To lint user js files:

```sh
$ gulp lint
```

#### `gulp lint-all`

To lint user and vendor js files (not part of default or watch tasks):

```sh
$ gulp lint-all
```

To run individual tasks manually:

```sh
$ gulp scripts
$ gulp styles
$ gulp images
```

### Scripts compilation order

Scripts will all be compiled into one file under `/dist/js/main.min.js`. It will first contain all files in `/js/vendor`, followed by user scripts in `/js`

### Plugin Docs:

- [Compass | gulp-compass](https://github.com/appleboy/gulp-compass)
- [Autoprefixer | gulp-autoprefixer](https://github.com/Metrime/gulp-autoprefixer)
- [Minify CSS | gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)
- [JSHint | gulp-jshint](https://github.com/wearefractal/gulp-jshint)
- [Concatenation | gulp-concat](https://github.com/wearefractal/gulp-concat)
- [Uglify | gulp-uglify](https://github.com/terinjokes/gulp-uglify)
- [Compress images | gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- [Caching of images so only changed images are compressed | gulp-cache](https://github.com/jgable/gulp-cache)
- [Clean files for a clean build | del](https://www.npmjs.org/package/del)

