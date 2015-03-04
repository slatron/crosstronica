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
          if (data.length) {
            vm.selectedPattern  = data[0];
            vm.availablePattens = data;
          }
        }, function(err) {
          console.error(err);
        });

      vm.reloadPattern = function() {
        patternFactory.load(vm.selectedPattern.id);
      };

    }
  };

}

angular.module('Crosstronica').
directive('loadPattern', loadPattern);
