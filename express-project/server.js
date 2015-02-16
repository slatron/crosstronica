var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    morgan     = require('morgan'),
    mongoose   = require('mongoose'),
    path       = require('path'),
    config     = require('./config');

if (config.env === 'local') {
  mongoose.connect(config.db_local);
} else {
  mongoose.connect(config.db_remote, config.db_options);
}

mongoose.set('debug', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

// Use /public for express static assets
app.use(express.static(__dirname + '/public'));

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// Send all other URLs to the index page
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(config.port);
console.log('Using Port ' + config.port);
