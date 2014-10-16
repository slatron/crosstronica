function gridSquare() {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      color: '@',
      symbol: '@',
      paint: '&'
    },
    templateUrl: '/js/angular_app/directives/grid_square/grid-square.html',
    link: function (scope, elem, attrs) {
      elem.on('mousedown', function() {
        scope.paint(attrs.row, attrs.col);
      });

      function detectLeftButton(e) {
        if ('buttons' in e) {
          return e.buttons === 1;
        } else if ('which' in e) {
          return e.which === 1;
        } else {
          return e.button === 1;
        }
      }

      elem.on('mouseover', function(e) {
        if(detectLeftButton(e)) {
          elem.on('mouseup mousemove', function handler(e) {
            scope.paint(attrs.row, attrs.col);
            elem.off('mouseup mousemove', handler);
          });
        }
      });
    }
  };
}

angular.module('Crosstronica').
directive('gridSquare', gridSquare);
