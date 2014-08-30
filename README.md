# gulp-setup

## What is this?

My default gulp task runner setup for HTML projects. Should be occasionaly updated as I use it.

### Installation

Clone this repo:

```sh
$ git clone git@github.com:slatron/gulp-setup.git foo
```

From the new `/foo` directory, install gulp and all required plugins, with `npm install`:

```sh
$ npm install gulp gulp-compass gulp-connect gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-connect gulp-cache del --save-dev
```

Since we are using the [compass library](http://compass-style.org/) to help with scss, be sure the compass gem is installed on your system:

```sh
$ gem update --system
$ gem install compass
```

Run gulp:

```sh
$ gulp
```

gulp will compile everything in to the `/app` folder and open a local node server at localhost:8080/.

Open [localhost:8080](http://localhost:8080) in your browser to view the style guide.

---


### Tasks

#### `gulp watch`

To watch for file changes on all `/dev/js`, `/dev/scss`, `/dev/*.html` and `/dev/images` files:

```sh
$ gulp watch
```

#### `gulp clean`

To clean the compiled `/app` folders:

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
$ gulp html
```

### Scripts compilation order

Scripts will all be compiled into one file under `/app/js/main.min.js`. It will first contain all files in `/js/vendor`, followed by user scripts in `/js`

---

### Plugin Docs:

- [Compass | gulp-compass](https://github.com/appleboy/gulp-compass)
- [gulp http-connect](https://www.npmjs.org/package/gulp-connect)
- [Autoprefixer | gulp-autoprefixer](https://github.com/Metrime/gulp-autoprefixer)
- [Minify CSS | gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)
- [JSHint | gulp-jshint](https://github.com/wearefractal/gulp-jshint)
- [Concatenation | gulp-concat](https://github.com/wearefractal/gulp-concat)
- [Uglify | gulp-uglify](https://github.com/terinjokes/gulp-uglify)
- [Compress images | gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- [Caching of images so only changed images are compressed | gulp-cache](https://github.com/jgable/gulp-cache)
- [Clean files for a clean build | del](https://www.npmjs.org/package/del)

### Credit due

Special thanks to [Mark Goodyear's blog](http://markgoodyear.com/2014/01/getting-started-with-gulp/) for helping me get started with gulp. I highly recommend it for anyone looking for an effective crash course.
