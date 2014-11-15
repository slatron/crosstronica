function pageState() {

  return {
    controller: function ($scope) {
      $scope.showGrid = false;
      $scope.selected = {};

      // true  = paint with clicks
      // false = add boreder with clicks
      $scope.paintMode = true;
    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
