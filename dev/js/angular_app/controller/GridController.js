function gridCtrl($scope, gridFactory) {

  $scope.rows     = 5;
  $scope.cols     = 5;
  $scope.selected = {};

  $scope.pallete = gridFactory.getPallete();
  $scope.grid = gridFactory.makeGrid($scope.rows, $scope.cols);

  $scope.selectColor = function(colorId) {
    $scope.selected = $scope.pallete[colorId];
  };

  $scope.paintCel = function(row, col, Color) {
    $scope.grid[row][col] = Color;
  };

}

angular.module('Crosstronica').
controller('GridCtrl', gridCtrl);
