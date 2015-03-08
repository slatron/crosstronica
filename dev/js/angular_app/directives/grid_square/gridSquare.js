function gridSquare() {

  return {
    restrict: 'E',
    replace: true,

    scope: {
      color: '=',  // All Data in one sane object
      paint: '&'   // ref to parent paint function
    },

    templateUrl: '/js/angular_app/directives/grid_square/grid-square.html',

    controllerAs: 'gridSquareVM',
    bindToController: true,

    controller: function($scope) {

      var vm = this;

      $scope.$watch(function() {
        return vm.color.borders;
      }, function(borders) {
        if (borders) {
          vm.top    = borders[0] ? 'border-top' : '';
          vm.right  = borders[1] ? 'border-right' : '';
          vm.bottom = borders[2] ? 'border-bottom' : '';
          vm.left   = borders[3] ? 'border-left' : '';
        }
      });
    },

    link: function (scope, elem) {

      var ctrlVM = scope.gridSquareVM;

      elem.on('mousedown', function() {
        ctrlVM.paint();
      });

      elem.on('mouseover', function(e) {
        if(ms_utils.detectLeftButton(e)) {
          elem.on('mouseup mousemove', function handler(e) {
            ctrlVM.paint();
            elem.off('mouseup mousemove', handler);
          });
        }
      });
    }
  };
}

angular.module('Crosstronica').
directive('gridSquare', gridSquare);
