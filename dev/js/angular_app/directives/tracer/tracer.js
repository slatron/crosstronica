function tracer() {

  return {
    restrict: 'E',
    replace: true,

    scope: {},

    templateUrl: '/js/angular_app/directives/tracer/tracer.html',

    controllerAs: 'tracerVM',
    bindToController: true,

    controller: function () {

      var vm = this;

      vm.show  = false;
      vm.top   = 0;
      vm.left  = 0;

      vm.toggleShow = function() {
        vm.show = !vm.show;
      };

      vm.setTop = function(newTop) {
        // Check for integer passed in
        if (newTop === parseInt(newTop, 10)) {
          vm.top = newTop;
        }
      };

      vm.setLeft = function(newLeft) {
        // Check for integer passed in
        if (newLeft === parseInt(newLeft, 10)) {
          vm.left = newLeft;
        }
      };

    }

  };
}

angular.module('Crosstronica').
directive('tracer', tracer);
