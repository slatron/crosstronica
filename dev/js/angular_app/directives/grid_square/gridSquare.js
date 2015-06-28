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
        console.log($(elem).text());
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

      // ====================================================================================

      // Re-render on data updates
      scope.$watch('color', function(newVals, oldVals) {
        return scope.render(ctrlVM.color);
      }, true);

      // ====================================================================================

      var $drawing = $(elem);

      scope.render = function(color) {

        var drawingWidth  = $drawing.width(),
            drawingHeight = $drawing.height();

          var h = 'height="' + drawingHeight + '"';
          var w = 'width="' + drawingWidth + '"';
          var s = 'style="fill: #' + color.rgb + '"';

          var squareArea = '<svg><rect ' + h + ' ' + w + ' ' + s + '></rect></svg>';

          $drawing.append(squareArea);

      };

      /**
      *   Create a function to watch for frame animations,
      *     re-render the chart when the chart width changes
      **/
      // var prevWidth = elem[0].getBoundingClientRect().width;

      // function onFrameChange() {
      //   var currentWidth = elem[0].getBoundingClientRect().width;

      //   if (!angular.equals(prevWidth, currentWidth)) {
      //     scope.render(scope.color);
      //   }

      //   prevWidth = currentWidth;
      //   requestAnimationFrame(onFrameChange);
      // }

      // onFrameChange();

    }
  };
}

angular.module('Crosstronica').
directive('gridSquare', gridSquare);
