function addColor() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/add_color/addColor.html',

    controllerAs: 'addColorVM',
    bindToController: true,

    controller: function ($http, palleteFactory, drawStateFactory) {

      var vm = this;

      vm.addColor = function () {

        var colorObj = {
          name: vm.newname,
          rgb: vm.newrgb,
          symbol: vm.newsymbol
        };

        // Send new color to factory
        palleteFactory.addColor(colorObj);

        // Clear New Color Form
        vm.newname   = '';
        vm.newrgb    = '';
        vm.newsymbol = '';

      };

    }
  };
}

angular.module('Crosstronica').
directive('addColor', addColor);
