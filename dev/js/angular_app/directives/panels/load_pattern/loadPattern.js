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

      vm.availablePattens = [];

      patternFactory.getAvailable()
        .then(function(data) {
          vm.availablePattens = data.available;
        }, function(err) {
          console.error(err);
        });

      vm.reloadPattern = function() {
        patternFactory.load(vm.selectedPattern);
      };

    }
  };

}

angular.module('Crosstronica').
directive('loadPattern', loadPattern);
