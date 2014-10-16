function gridCtrl($scope, gridFactory) {

  var rows     = 10;
  var cols     = 10;
  $scope.selected = {};
  $scope.pallete  = [];
  $scope.grid     = [];

  $scope.showGrid = false;

  $scope.selectColor = function(colorId) {
    $scope.selected = $scope.pallete[colorId];
  };

  $scope.paintCel = function(row, col, triggerDigest) {
    console.log('Paint Cel At: ', row, col);

    triggerDigest = triggerDigest || false;

    $scope.grid[row][col] = $scope.selected;

    if(triggerDigest) $scope.$digest();
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
