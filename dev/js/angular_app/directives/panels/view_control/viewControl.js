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

      vm.toggleCenterGrid = function() {
        var current = vm.viewState.centered;
        viewStateFactory.centerGrid(!current);
      };

      vm.toggleTracer = function() {
        viewStateFactory.toggleTracer();
      };
    }
  };

}

angular.module('Crosstronica').
directive('viewControl', viewControl);
