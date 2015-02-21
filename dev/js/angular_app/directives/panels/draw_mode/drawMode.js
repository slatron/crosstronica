function drawMode() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/draw_mode/drawMode.html'
  };

}

angular.module('Crosstronica').
directive('drawMode', drawMode);
