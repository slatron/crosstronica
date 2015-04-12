function tracer() {

  return {
    restrict: 'E',
    replace: true,

    scope: {},

    templateUrl: '/js/angular_app/directives/tracer/tracer.html',

    controllerAs: 'tracerVM',
    bindToController: true

  };
}

angular.module('Crosstronica').
directive('tracer', tracer);
