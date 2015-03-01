function savePattern() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/save_pattern/savePattern.html',

    controllerAs: 'savePatternVM',
    bindToController: true,

    controller: function (patternFactory) {

      var vm = this;

      vm.savePattern = function() {

        currentPattern = patternFactory.get();

        var patternData = {
          name: currentPattern.name,
          grid: currentPattern.grid
        };

        patternFactory.saveNew(patternData).then(
          function(success) {
            console.log('successful pattern post', success);
          },
          function(error) {
            console.error('error on pattern post', error);
          }
        );

      };

    }
  };
}

angular.module('Crosstronica').
directive('savePattern', savePattern);
