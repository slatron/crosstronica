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
      $scope.$watch('color.borders', function(side) {
        if(side) {
          // console.log('in gridSquare.js controller borders watch ', side);
          $scope.setBorders(side);
        }
      });
    },

    link: function (scope, elem) {

      var ctrlVM = scope.gridSquareVM;

      scope.setBorders = function(sides) {
        elem.removeClass('border-top border-right border-bottom border-left');

        var sidesArray = [];

        if(sides[0]) sidesArray.push('border-top');
        if(sides[1]) sidesArray.push('border-right');
        if(sides[2]) sidesArray.push('border-bottom');
        if(sides[3]) sidesArray.push('border-left');

        sidesString = sidesArray.join(' ');

        elem.addClass(sidesString);
      };

      elem.on('mousedown', function() {
        scope.paint();
      });

      elem.on('mouseover', function(e) {
        if(ms_utils.detectLeftButton(e)) {
          elem.on('mouseup mousemove', function handler(e) {
            scope.paint();
            elem.off('mouseup mousemove', handler);
          });
        }
      });
    }
  };
}

angular.module('Crosstronica').
directive('gridSquare', gridSquare);
