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

        console.log('attempting post');

        var colorObj = {
          name: vm.newname,
          rgb: vm.newrgb,
          symbol: vm.newsymbol
        };

        $http.post('/api/pallete', colorObj)
          .success(function () {

            // Clear New Color Form
            vm.newname   = '';
            vm.newrgb    = '';
            vm.newsymbol = '';

            // Update Current Pallete with new color
            palleteFactory.getPallete();
          });
      };

    }
  };
}

angular.module('Crosstronica').
directive('addColor', addColor);
