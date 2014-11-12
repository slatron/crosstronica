function pattern() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',
    controller: function ($scope, gridFactory) {

      var rows = 77;
      var cols = 47;

      $scope.grid  = [];

      var _init = function() {
        $scope.grid = gridFactory.makeGrid(rows, cols);
      };

      _init();

    },

    link: function (scope, elem, attrs) {

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        scope.grid[row][col] = scope.selected;

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
