function selectedColor() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/selected_color/selectedColor.html',
    controller: function ($scope) {

      $scope.selectColor = function(colorId) {
        if (colorId !== 'erase') {
          $scope.$parent.selected = $scope.pallete[colorId];
        } else {
          $scope.$parent.selected = {};
        }

      };

    }
  };

}

angular.module('Crosstronica').
directive('selectedColor', selectedColor);
