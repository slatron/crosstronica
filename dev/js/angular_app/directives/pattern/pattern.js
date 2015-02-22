function pattern(pageStateFactory, gridFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',

    controllerAs: 'patternVM',
    bindToController: true,

    controller: function () {

      this.grid = gridFactory.get();

    },

    link: function (scope, elem, attrs) {

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        // Paint Mode
        if (pageStateFactory.paintMode()) {
          var lastColor = gridFactory.get()[row][col];
          var oldBorders = lastColor.borders;
          pageStateFactory.selected().borders = oldBorders;
          gridFactory.get()[row][col] = angular.copy(pageStateFactory.selected());

          console.log('paint color: ', pageStateFactory.selected());
          // console.log('grid: ', gridFactory.get());

        }

        // Border Mode
        // if(!scope.pageState.paintMode) {

        //   if(!_.size(scope.pageState.selected)) {

        //     scope.grid[row][col].borders = [false, false, false, false];

        //   } else {

        //     var prevBorders = scope.grid[row][col].borders || [false, false, false, false];

        //     // console.log(prevBorders, scope.pageState.borderSide);

        //     if(scope.pageState.borderSide === 'top') prevBorders[0] = true;
        //     if(scope.pageState.borderSide === 'right') prevBorders[1] = true;
        //     if(scope.pageState.borderSide === 'bottom') prevBorders[2] = true;
        //     if(scope.pageState.borderSide === 'left') prevBorders[3] = true;

        //     var newBorders = new Array([]);

        //     _.each(prevBorders, function(elem, idx) {
        //       newBorders[idx] = elem;
        //     });

        //     // console.log('newborders in paintCel: ', newBorders);

        //     scope.grid[row][col].borders = newBorders;
        //   }
        // }

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
