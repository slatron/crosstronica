function pattern(pageStateFactory, gridFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',

    controllerAs: 'patternVM',
    bindToController: true,

    controller: function () {

      var vm = this;

      vm.grid = gridFactory.get();

    },

    link: function (scope, elem, attrs) {

      var ctrlVM = scope.patternVM;
      var pageState = pageStateFactory.get();

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        // Paint Mode
        if (pageState.paintMode) {
          var lastColor = ctrlVM.grid[row][col];
          var oldBorders = lastColor.borders;
          pageState.selected.borders = oldBorders;
          ctrlVM.grid[row][col] = angular.copy(pageState.selected);
        }

        // Border Mode
        if(!pageState.paintMode) {

          if(!_.size(pageState.selected)) {

            ctrlVM.grid[row][col].borders = [false, false, false, false];

          } else {

            var prevBorders = ctrlVM.grid[row][col].borders || [false, false, false, false];

            // console.log(prevBorders, scope.pageState.borderSide);

            if(pageState.borderSide === 'top') prevBorders[0] = true;
            if(pageState.borderSide === 'right') prevBorders[1] = true;
            if(pageState.borderSide === 'bottom') prevBorders[2] = true;
            if(pageState.borderSide === 'left') prevBorders[3] = true;

            var newBorders = new Array([]);

            _.each(prevBorders, function(elem, idx) {
              newBorders[idx] = elem;
            });

            // console.log('newborders in paintCel: ', newBorders);

            ctrlVM.grid[row][col].borders = newBorders;
          }
        }

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
