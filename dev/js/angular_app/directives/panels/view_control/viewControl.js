function viewControl(viewStateFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,

    templateUrl: '/js/angular_app/directives/panels/view_control/viewControl.html',

    controllerAs: 'viewControlVM',
    bindToController: true,

    controller: function () {
      var vm = this;

      vm.viewState = viewStateFactory.get();

      vm.toggleCenterGrid = toggleCenterGrid;
      vm.toggleTracer     = toggleTracer;
      vm.setGridSize      = setGridSize;

      function toggleCenterGrid() {
        var current = vm.viewState.centered;
        viewStateFactory.centerGrid(!current);
      }

      function toggleTracer() {
        viewStateFactory.toggleTracer();
      }

      function setGridSize(size) {
        viewStateFactory.setGridSize(size);
      }
    }
  };

}

angular.module('Crosstronica').
directive('viewControl', viewControl);
