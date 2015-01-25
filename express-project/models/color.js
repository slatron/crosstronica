var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var ColorSchema = new Schema({
  c_id: {type: Number, index: {unique: true}},
  name: {type: String, match: /^\w{1,25}$/},
  rgb: {type: String, match: /^([0-9a-f]{3}){1,2}$/i},
  symbol: {type: String, match: /^\w{1,2}$/}
});

module.exports = mongoose.model('Color', ColorSchema);
