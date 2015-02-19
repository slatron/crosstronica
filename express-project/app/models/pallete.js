var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var PalleteSchema = new Schema({
  name: { type: String, 'default': 'No Name' },
  pallete: { type: Array , 'default': [] }
});

module.exports = mongoose.model('Pallete', PalleteSchema);
