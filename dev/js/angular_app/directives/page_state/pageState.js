function pageState() {

  return {
    controller: function ($scope) {
      $scope.showGrid = false;
      $scope.selected = {};

      $scope.pageState = {};

      // true  = paint with clicks
      // false = add boreder with clicks
      $scope.pageState.paintMode = true;
    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
