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

          if (borders[0]) {
            vm.top = 'border-top';
          } else {
            vm.top = '';
          }

          if (borders[1]) {
            vm.right = 'border-right';
          } else {
            vm.right = '';
          }

          if (borders[2]) {
            vm.bottom = 'border-bottom';
          } else {
            vm.bottom = '';
          }

          if (borders[3]) {
            vm.left = 'border-left';
          } else {
            vm.left = '';
          }
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
