var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var PatternSchema = new Schema(
  {
    name: {type: String},
    grid: [
            [
              {
                borders: [String],
                c_id: Number,
                name: String,
                rgb: String,
                symbol: String
              }
            ]
          ]
  }
);

module.exports = mongoose.model('Pattern', PatternSchema);

// Example 2x2 grid:
//
// [
//   [
//     {
//       "borders":[
//         false,
//         false,
//         false,
//         false
//       ]
//     },
//     {
//       "borders":[
//         false,
//         false,
//         false,
//         false
//       ]
//     }
//   ],
//   [
//     {
//       "borders":[
//         false,
//         false,
//         false,
//         false
//       ]
//     },
//     {
//       "borders":[
//         false,
//         false,
//         false,
//         false
//       ]
//     }
//   ]
// ]
