function pageState() {

  return {
    controller: function ($scope) {

      $scope.pageState = {};

      // true  = paint with clicks
      // false = add boreder with clicks
      $scope.pageState.paintMode = true;
      $scope.pageState.showGrid = false;
      $scope.pageState.selected = {};
      $scope.pageState.borderSide = 'left';
    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
