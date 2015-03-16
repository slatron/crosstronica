// Karma configuration
module.exports = function(config) {
  config.set({

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'dev/**/*.html': ['ng-html2js']
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    /**
    * list of files / patterns to load in the browser this
    *   is the same order as the gulp script compilation with
    *   the addition of angular-mocks for dependency injection.
    *
    * HTML files for directives are also included. These are
    *   converted to js later by ngHtml2JsPreprocessor
    *
    **/
    files: [
        'dev/js/angular_base/angular.js',
        'tests/units/support/angular-mocks.js',
        'dev/js/vendor/**/*.js',
        'dev/js/main.js',
        'dev/js/angular_app/**/*.js'
    ],

    // list of files to exclude
    exclude: [
      'dev/js/dormant/*.js'
    ],

    /**
    *   Remove dev from html paths to match definition in controllers
    *
    *   This provides all html templates for element directives
    *   to be available in the 'templates' module.
    **/
    ngHtml2JsPreprocessor: {
      stripPrefix: 'dev/',
      moduleName: 'templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    plugins: [
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]

  });
};
