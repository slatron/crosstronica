function deletePattern() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/delete_pattern/deletePattern.html',

    controllerAs: 'deletePatternVM',
    bindToController: true,

    controller: function (patternFactory) {

      var vm = this;

      vm.currentPattern = patternFactory.get();

      vm.deletePattern = function() {

        patternFactory.deletePattern(vm.currentPattern.id).then(
          function(success) {
            console.log('successful pattern DELETE', success);
            patternFactory.clearCurrent();
          },
          function(error) {
            console.error('error on pattern DELETE', error);
          }
        );

      };

    }
  };
}

angular.module('Crosstronica').
directive('deletePattern', deletePattern);
