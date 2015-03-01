function selectedColor(drawStateFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,

    templateUrl: '/js/angular_app/directives/panels/selected_color/selectedColor.html',

    controllerAs: 'selectedVM',
    bindToController: true,

    controller: function () {
      var vm = this;

      vm.drawState = drawStateFactory.get();

      vm.enableDrawMode = function(mode) {
        drawStateFactory.setMode(mode);
      };

      vm.borderMode = function(mode) {
        drawStateFactory.setBorderMode(mode);
      };
    }
  };

}

angular.module('Crosstronica').
directive('selectedColor', selectedColor);
