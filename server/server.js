var restify = require('restify'),
    mongojs = require('mongojs');

var db = mongojs('mongodb://mike:mike123@ds063160.mongolab.com:63160/crosstronica', ['products']);
// var db = mongojs('crosstronica', ['products']);

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, function () {
  console.log('server started at :3000');
});

server.get('/products', function(req, res, next) {
  db.products.find(function(err, products) {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify(products));
  });
  return next();
});

server.get('/product/:id', function (req, res, next) {
    db.products.findOne({
        id: req.params.id
    }, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(data));
    });
    return next();
});

server.post('/products', function(req, res, next) {
  var product = req.params;
  db.products.save(product,
    function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(JSON.stringify(data));
    });
  return next();
});

server.put('/product/:id', function(req, res, next) {
  db.products.findOne({
    id: req.params.id
  }, function(err, data) {
    var updatedProduct = {};
    for (var n in data) {
      updatedProduct[n] = data[n];
    }
    for (var n in req.params) {
      updatedProduct[n] = req.params[n];
    }
    db.products.update({
      id: req.params.id
    }, updatedProduct, {
      multi: false
    }, function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(JSON.stringify(data));
    });
  });
});

server.del('/product/:id', function(req, res, next){
  db.products.remove({
    id: req.params.id
  }, function(err, data){
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify(true));
  });
  return next();
});

module.exports = server;
