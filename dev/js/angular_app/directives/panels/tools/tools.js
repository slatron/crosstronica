function tools() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/tools/tools.html',

    controllerAs: 'toolsVM',
    bindToController: true,

    controller: function(pageStateFactory) {
      var vm = this;

      vm.pageState = pageStateFactory.get();

      vm.selectEraseTool = function() {
        pageStateFactory.selected();
      };
    }
  };

}

angular.module('Crosstronica').
directive('tools', tools);
