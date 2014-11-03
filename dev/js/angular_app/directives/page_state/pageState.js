function pageState() {

  return {
    controller: function ($scope) {
      $scope.showGrid = false;
      $scope.selected = {};
    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
