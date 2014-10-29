function pageState() {

  return {
    controller: function ($scope) {
      $scope.showGrid = false;
    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
