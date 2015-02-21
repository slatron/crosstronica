function tools() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/tools/tools.html'
  };

}

angular.module('Crosstronica').
directive('tools', tools);
