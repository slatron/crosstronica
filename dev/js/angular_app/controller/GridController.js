function gridCtrl($scope, gridFactory) {

  $scope.rows = 210;
  $scope.cols = 80;

  $scope.grid = gridFactory.initGrid($scope.rows, $scope.cols);
}

angular.module('Crosstronica').
controller('GridCtrl', gridCtrl);
