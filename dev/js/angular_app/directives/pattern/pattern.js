function pattern() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',
    controller: function ($scope, gridFactory) {

      var rows = 5;
      var cols = 5;

      $scope.grid  = [];

      var _init = function() {
        $scope.grid = gridFactory.makeGrid(rows, cols);
      };

      _init();

    },

    link: function (scope, elem, attrs) {

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        if(scope.pageState.paintMode) {
          scope.grid[row][col] = scope.selected;
        }

        if(!scope.pageState.paintMode) {
          console.log(scope.grid[row][col]);
          scope.grid[row][col].borders = [true, false, false, false];
        }

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
