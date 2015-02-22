function drawMode() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/draw_mode/drawMode.html',

    controllerAs: 'drawModeVM',
    bindToController: true,

    controller: function(pageStateFactory) {
      var vm = this;

      vm.pageState = pageStateFactory.get();
    }
  };

}

angular.module('Crosstronica').
directive('drawMode', drawMode);
