var User     = require('../models/user'),
    Color    = require('../models/color'),
    Pattern  = require('../models/pattern'),
    jwt    = require('jsonwebtoken'),
    config = require('../../config');

module.exports = function(app, express) {

  var apiRouter = express.Router();

  // Authentication: Recieve Token
  apiRouter.post('/authenticate', function(req, res) {
    User.findOne({
      username: req.body.username
    }).select('name username password').exec(function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({success: false, message: 'Authentication failed. User not found.'});
      } else if (user) {
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) {
          res.json({success: false, message: 'Authentication failed. Wrong password.'});
        } else {
          var token = jwt.sign({
            name: user.name,
            username: user.username
          }, config.secret, {
            expiresInMinutes: 1440 // 24 hours
          });

          res.json({
            success: true,
            message: 'Here is your token!',
            token: token
          });
        }
      }
    })
  })

  // Check for token on api usage
  apiRouter.use(function(req, res, next) {
    console.log('checking token');
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];
    if (token) {

      jwt.verify(token, config.secret, function(err, decoded) {

        if (err) {
          return res.status(403).send({ success: false, message: 'Failed to authenticate token.'});
        } else {
          req.decoded = decoded;
          console.log(' *** APPROVED!!! *** ');
          next();
        }

      });

    } else {
      return res.status(403).send({ success: false, message: 'No token provided.'});
    }

  })



  // Custom Middleware
  // =================================================================
  apiRouter.use(function(req, res, next) {
    console.log('API hit');
    // Add user authentication here
    next();
  })



  // Base Call - this is /api/
  // =================================================================
  apiRouter.get('/', function(req, res) {
    res.json({message: 'Welcome to the API'});
  })




  // /users operations
  // =================================================================
    apiRouter.route('/users')

    .post(function(req, res) {
      var user = new User();

      user.name = req.body.name;
      user.username = req.body.username;
      user.password = req.body.password;

      user.save(function(err) {
        if (err) {
          if (err.code == 11000) {
            return res.json({
              success: false,
              message: 'A user with that username already exists'
            });
          } else {
            return res.send(err);
          }
        }
        res.json({message: 'User created!'});
      });

    })

    .get(function(req, res) {
      User.find(function(err, users) {
        if (err) res.send(err);

        res.json(users);
      });
    });

  apiRouter.route('/users/:user_id')

    .get(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);

        res.json(user);
      });
    })

    .put(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);

        if (req.body.name) user.name = req.body.name;
        if (req.body.username) user.username = req.body.username;
        if (req.body.password) user.password = req.body.password;

        user.save(function(err) {
          if (err) res.send(err);
          res.json({ message: 'User Updated!'});
        });
      })
    })

    .delete(function(req, res) {
      User.remove({
        _id: req.params.user_id
      }, function(err, user) {
        if (err) res.send(err);

        res.json({ message: 'Successfully Deleted!'});
      });
    });

  // Get current user information
  apiRouter.get('/me', function(req, res) {
    res.send(req.decoded);
  });




  // Pallete Operations
  // ==========================================================

  apiRouter.route('/pallete')

    .post(function(req, res) {
      var color = new Color();

      color.name   = req.body.name;
      color.rgb    = req.body.rgb;
      color.symbol = req.body.symbol;

      color.save(function(err) {
        console.log('error on color.save: ', err);
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
      Color.find(function(err, pallete) {
        if (err) res.send(err);
        res.json(pallete);
      });
    });




  // Pattern Operations
  // ==========================================================

  // apiRouter.route('/pattern')

  //   .post(function(req, res) {
  //     var pattern = new Pattern();

  //     pattern.name = req.body.name;
  //     pattern.grid = req.body.grid;

  //     pattern.save(function(err) {
  //       if (err) {
  //         return res.send(err);
  //       }
  //       res.json({message: 'Pattern created!'});
  //     });

  //   })

  //   .get(function(req, res) {
  //     Pattern.find(function(err, patterns) {
  //       if (err) res.send(err);

  //       res.json(patterns);
  //     });
  //   });

  // apiRouter.route('/pattern/:pattern_id')

  //   .get(function(req, res) {
  //     Pattern.findById(req.params.pattern_id, function(err, pattern) {
  //       if (err) res.send(err);

  //       res.json(pattern);
  //     });
  //   })

  //   .put(function(req, res) {
  //     Pattern.findById(req.params.pattern_id, function(err, pattern) {
  //       if (err) res.send(err);

  //       if (req.body.name) pattern.name = req.body.name;
  //       if (req.body.grid) pattern.password = req.body.grid;

  //       pattern.save(function(err) {
  //         if (err) res.send(err);
  //         res.json({ message: 'Pattern Updated!'});
  //       });
  //     })
  //   })

  //   .delete(function(req, res) {
  //     Pattern.remove({
  //       _id: req.params.pattern_id
  //     }, function(err, pattern) {
  //       if (err) res.send(err);

  //       res.json({ message: 'Successfully Deleted Pattern!'});
  //     });
  //   });

  return apiRouter;

};
