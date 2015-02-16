module.exports = {
  'port': process.env.PORT || 8080,
  'db_local': 'mongodb://localhost/crosstronica',
  'db_remote': 'mongodb://slatron:eppos1@ds063160.mongolab.com:63160/crosstronica',
  'db_options': { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } },
  'secret':  'slatronica',
  'env': 'local'
}
