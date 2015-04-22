function pattern(viewStateFactory, drawStateFactory, patternFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',

    controllerAs: 'patternVM',
    bindToController: true,

    controller: function () {

      var vm = this;

      vm.gridData  = patternFactory.get();
      vm.viewState = viewStateFactory.get();

    },

    link: function (scope, elem) {

      var ctrlVM = scope.patternVM;
      var drawState = drawStateFactory.get();

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        // Paint Mode
        if (drawState.drawMode === 'paint') {
          var lastColor = ctrlVM.gridData.grid[row][col];
          var oldBorders = lastColor.borders;
          drawState.paint.selected.borders = oldBorders;
          ctrlVM.gridData.grid[row][col] = angular.copy(drawState.paint.selected);
        }

        // Border Mode
        if (drawState.drawMode === 'border') {

          var newBorders = [];

          if(drawState.border.erase) {

            newBorders = [false, false, false, false];

          } else {

            var prevBorders = ctrlVM.gridData.grid[row][col].borders || [false, false, false, false];

            if(drawState.border.borderSide === 'top') prevBorders[0]    = true;
            if(drawState.border.borderSide === 'right') prevBorders[1]  = true;
            if(drawState.border.borderSide === 'bottom') prevBorders[2] = true;
            if(drawState.border.borderSide === 'left') prevBorders[3]   = true;

            _.each(prevBorders, function(elem, idx) {
              newBorders[idx] = elem;
            });

          }

          ctrlVM.gridData.grid[row][col].borders = newBorders;

        }

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
