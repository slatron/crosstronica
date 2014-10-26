function gridSquare() {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      color:  '@', // 6-digit RGB color
      symbol: '@', // string to display in square
      paint:  '&'  // ref to parent paint function
    },
    templateUrl: '/js/angular_app/directives/grid_square/grid-square.html',
    link: function (scope, elem, attrs) {
      elem.on('mousedown', function() {
        scope.paint(attrs.row, attrs.col);
      });

      elem.on('mouseover', function(e) {
        if(ms_utils.detectLeftButton(e)) {
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
