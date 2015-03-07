function loadPattern() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/load_pattern/loadPattern.html',

    controllerAs: 'loadPatternVM',
    bindToController: true,

    controller: function(patternFactory) {
      var vm = this;

      vm.patternData = patternFactory.get();

      patternFactory.initAvailable()
        .then(function(data) {
          console.log('available patterns loaded', data);
        }, function(err) {
          console.error(err);
        });

      vm.reloadPattern = function() {
        patternFactory.load(vm.patternData.selected.id);
      };

    }
  };

}

angular.module('Crosstronica').
directive('loadPattern', loadPattern);
