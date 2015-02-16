var express      = require('express'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    jwt          = require('jsonwebtoken'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser');

var mongoose = require('mongoose'),
    uriUtil  = require('mongodb-uri'),
    User     = require('./models/user'),
    Color    = require('./models/color'),
    Pattern  = require('./models/pattern');

var baseRoutes = require('./routes/index'),
    userRoutes = require('./routes/users');

var superSecret = 'slatronica';

var app = express();


/**
*  Mongolab DB Connection
**/
// var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } },
//     mongodbUri = 'mongodb://slatron:eppos1@ds063160.mongolab.com:63160/crosstronica',
//     mongooseUri = uriUtil.formatMongoose(mongodbUri);

// mongoose.connect(mongooseUri, options);

/**
*  Local DB Connection
**/
mongoose.connect('mongodb://localhost/crosstronica');

mongoose.set('debug', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// view engine setup
// =================
app.set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'))
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }))
   .use(cookieParser())
   .use(express.static(path.join(__dirname, 'public')));



// Pallete Operations
// ==========================================================

apiRouter.route('/pallete')

  .post(function(req, res) {
    var pattern = new Pattern();

    color.name   = req.body.name;
    color.rgb    = req.body.rgb;
    color.symbol = req.body.symbol;
    color.c_id   = req.body.c_id;

    color.save(function(err) {
      if (err) {
        if (err.code == 11000) {
          return res.json({
            success: false,
            message: 'A color with that id already exists',
            error: err
          });
        } else {
          return res.send(err);
        }
      }
      res.json({message: 'Color created!'});
    });

  })

  .get(function(req, res) {
    Color.find(function(err, colors) {
      if (err) res.send(err);

      res.json(colors);
    });
  });




// Pattern Operations
// ==========================================================

apiRouter.route('/pattern')

  .post(function(req, res) {
    var pattern = new Pattern();

    pattern.name = req.body.name;
    pattern.grid = req.body.grid;

    pattern.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({message: 'Pattern created!'});
    });

  })

  .get(function(req, res) {
    Pattern.find(function(err, patterns) {
      if (err) res.send(err);

      res.json(patterns);
    });
  });

apiRouter.route('/pattern/:pattern_id')

  .get(function(req, res) {
    Pattern.findById(req.params.pattern_id, function(err, pattern) {
      if (err) res.send(err);

      res.json(pattern);
    });
  })

  .put(function(req, res) {
    Pattern.findById(req.params.pattern_id, function(err, pattern) {
      if (err) res.send(err);

      if (req.body.name) pattern.name = req.body.name;
      if (req.body.grid) pattern.password = req.body.grid;

      pattern.save(function(err) {
        if (err) res.send(err);
        res.json({ message: 'Pattern Updated!'});
      });
    })
  })

  .delete(function(req, res) {
    Pattern.remove({
      _id: req.params.pattern_id
    }, function(err, pattern) {
      if (err) res.send(err);

      res.json({ message: 'Successfully Deleted Pattern!'});
    });
  });

app.use('/api', apiRouter)

// error handlers
// ==============

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen('2233');

module.exports = app;
