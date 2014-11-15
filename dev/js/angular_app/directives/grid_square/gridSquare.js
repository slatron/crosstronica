function gridSquare() {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      borders: '=', // {array}
      color:  '@',  // 6-digit RGB color
      symbol: '@',  // string to display in square
      paint:  '&'   // ref to parent paint function
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

      var _init = function() {

        _.each(scope.borders, function(bold, idx) {
          switch (idx) {
            case 0:
              if(bold) elem.addClass('border-top');
            break;
            case 1:
              if(bold) elem.addClass('border-right');
            break;
            case 2:
              if(bold) elem.addClass('border-bottom');
            break;
            case 3:
              if(bold) elem.addClass('border-left');
            break;
            default:
              console.log('caught extra array value in borders');
            break;
          }
        });
      };

      _init();

    }
  };
}

angular.module('Crosstronica').
directive('gridSquare', gridSquare);
