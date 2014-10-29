function selectedColor() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/selected_color/selectedColor.html',
    controller: function ($scope) {

      $scope.selected = {};

      $scope.selectColor = function(colorId) {
        $scope.selected = $scope.pallete[colorId];
      };

    }
  };

}

angular.module('Crosstronica').
directive('selectedColor', selectedColor);
