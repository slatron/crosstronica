// This task runs unit tests at tests/units/

var gulp  = require('gulp'),
    karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('units', function (done) {
  karma.start({
    configFile: __dirname + '../../../units.conf.js'
  }, done);
});
