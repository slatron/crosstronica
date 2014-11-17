function pattern() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',
    controller: function ($scope, gridFactory) {

      $scope.grid  = [];

      var _init = function() {
        $scope.grid = gridFactory.makeGrid();
      };

      _init();

    },

    link: function (scope, elem, attrs) {

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        // Paint Mode
        if(scope.pageState.paintMode) {
          var lastColor = scope.grid[row][col];
          var oldBorders = lastColor.borders;
          scope.pageState.selected.borders = oldBorders;
          scope.grid[row][col] = angular.copy(scope.pageState.selected);
        }

        // Border Mode
        if(!scope.pageState.paintMode) {

          if(!_.size(scope.pageState.selected)) {

            scope.grid[row][col].borders = [false, false, false, false];

          } else {

            var prevBorders = scope.grid[row][col].borders || [false, false, false, false];

            // console.log(prevBorders, scope.pageState.borderSide);

            if(scope.pageState.borderSide === 'top') prevBorders[0] = true;
            if(scope.pageState.borderSide === 'right') prevBorders[1] = true;
            if(scope.pageState.borderSide === 'bottom') prevBorders[2] = true;
            if(scope.pageState.borderSide === 'left') prevBorders[3] = true;

            var newBorders = new Array([]);

            _.each(prevBorders, function(elem, idx) {
              newBorders[idx] = elem;
            });

            // console.log('newborders in paintCel: ', newBorders);

            scope.grid[row][col].borders = newBorders;
          }
        }

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
