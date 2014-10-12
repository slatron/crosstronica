function gridFactory() {

  grid = [];

  var gridFactoryMethods = {};

  gridFactoryMethods.initGrid = function(rows, cols) {

    // Insert row arrays in grid array

    console.time('testing-lodash');
    _.each(new Array(rows), function(i){
      var thisRow = new Array(cols);
      grid[i] = thisRow;
    });
    console.timeEnd('testing-lodash');

    console.time('testing-native');
    for(i=0; i < rows; i++) {
      var thisRow = new Array(cols);
      grid[i] = thisRow;
    }
    console.timeEnd('testing-native');

    // Fill grid with numbers 0 to grid size
    for(i=0; i < rows; i++) {

      var start = cols * i,
          end   = (cols * i) + cols;

      grid[i] = _.range(start, end);

    }

    return grid;

  };

  return gridFactoryMethods;

}

angular.module('Crosstronica').
factory('gridFactory', gridFactory);
