function selectedColor() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/selected_color/selectedColor.html',
    controller: function ($scope) {

      $scope.selectColor = function(color) {
        color = color || {};
        $scope.pageState.selected = color;
      };

    }
  };

}

angular.module('Crosstronica').
directive('selectedColor', selectedColor);
