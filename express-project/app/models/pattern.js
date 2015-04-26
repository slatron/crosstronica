var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var PatternSchema = new Schema(
  {
    name: {type: String},
    grid: []
  }
);

module.exports = mongoose.model('Pattern', PatternSchema);

// Example 2x2 grid:
//
// [
//   [
//     {},
//     {
//       "rgb": "000000",
//       "symbol": "B"
//     }
//   ],
//   [
//     {
//       "borders":[
//         true,
//         false,
//         false,
//         true
//       ],
//       "rgb": "000000",
//       "symbol": "B"
//     },
//     {}
//   ]
// ]
