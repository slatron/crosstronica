var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var ColorSchema = new Schema({
  name: {type: String, match: /^\w{1,25}$/},
  rgb: {type: String, index: true, match: /^([0-9a-f]{3}){1,2}$/i},
  symbol: {type: String, match: /^\w{1,2}$/}
});

module.exports = mongoose.model('Color', ColorSchema, 'pallete');
