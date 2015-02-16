/**
* paintMode:
* true  = paint with clicks
* false = add border with clicks
**/

function pageState() {

  return {
    controller: function ($scope) {

      $scope.pageState = {
        borderSide: 'left',
        paintMode: true,
        selected: {},
        showGrid: false
      };

    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
