function newPattern() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/new_pattern/newPattern.html',

    controllerAs: 'newPatternVM',
    bindToController: true,

    controller: function (patternFactory) {

      var vm = this;

      vm.createPattern = function () {

        var gridSpec = {
          name: vm.newname,
          rows: vm.newrows,
          cols: vm.newcols
        };

        patternFactory.createNew(gridSpec);

        // Clear Form
        vm.newname = '';
        vm.newrows = '10';
        vm.newcols = '10';
      };

    }
  };
}

angular.module('Crosstronica').
directive('newPattern', newPattern);
