function gridFactory($http, $q) {

  var gridFactoryMethods = {};

  var pallete = [];

  var initPallete = $http.get('/json/pallete.json').success(function(data){
    pallete = data;
  });

  gridFactoryMethods.getPallete = function() {
    return pallete;
  };

  gridFactoryMethods.makeGrid = function(rows, cols) {

    var grid = [];

    // Insert row arrays in grid array
    for(i=0; i < rows; i++) {
      var thisRow = new Array(cols);
      grid[i] = thisRow;
    }

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
