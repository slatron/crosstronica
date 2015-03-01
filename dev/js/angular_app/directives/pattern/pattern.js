function pattern(pageStateFactory, patternFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',

    controllerAs: 'patternVM',
    bindToController: true,

    controller: function () {

      var vm = this;

      vm.gridData = {};

      patternFactory.get()
        .then(function(data) {

          vm.gridData = data;

        }, function(err) {
          console.error(err);
        });

    },

    link: function (scope, elem, attrs) {

      var ctrlVM = scope.patternVM;
      var pageState = pageStateFactory.get();

      scope.paintCel = function(row, col, triggerDigest) {

        triggerDigest = triggerDigest || false;

        // Paint Mode
        if (pageState.drawMode === 'paint') {
          var lastColor = ctrlVM.gridData.grid[row][col];
          var oldBorders = lastColor.borders;
          pageState.paint.selected.borders = oldBorders;
          ctrlVM.gridData.grid[row][col] = angular.copy(pageState.paint.selected);
        }

        // Border Mode
        if (pageState.drawMode === 'border') {

          if(pageState.border.borderSide === '') {

            ctrlVM.gridData.grid[row][col].borders = [false, false, false, false];

          } else {

            var prevBorders = ctrlVM.gridData.grid[row][col].borders || [false, false, false, false];

            if(pageState.border.borderSide === 'top') prevBorders[0] = true;
            if(pageState.border.borderSide === 'right') prevBorders[1] = true;
            if(pageState.border.borderSide === 'bottom') prevBorders[2] = true;
            if(pageState.border.borderSide === 'left') prevBorders[3] = true;

            var newBorders = new Array([]);

            _.each(prevBorders, function(elem, idx) {
              newBorders[idx] = elem;
            });

            // console.log('newborders in paintCel: ', newBorders);

            ctrlVM.gridData.grid[row][col].borders = newBorders;
          }
        }

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
