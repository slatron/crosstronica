function gridCtrl($scope, gridFactory) {

  var rows     = 15;
  var cols     = 15;
  $scope.selected = {};
  $scope.pallete  = [];
  $scope.grid     = [];

  $scope.showGrid = false;

  $scope.selectColor = function(colorId) {
    $scope.selected = $scope.pallete[colorId];
  };

  $scope.paintCel = function(row, col) {
    console.log('Paint Cel At: ', row, col);
    $scope.grid[row][col] = $scope.selected;
  };

  var _init = function() {

    $scope.grid = gridFactory.makeGrid(rows, cols);

    gridFactory.getPallete()
      .then(function(data){
        $scope.pallete = data;
      }, function(data){
        console.error('error resolving getPallete promise: ', data);
      });
  };

  _init();

}

angular.module('Crosstronica').
controller('GridCtrl', gridCtrl);
