function addColor() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/add_color/addColor.html',

    controllerAs: 'addColorVM',
    bindToController: true,

    controller: function ($http, palleteFactory, pageStateFactory) {

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
            console.log('successful color post');

            // Clear New Color Form
            vm.newname   = '';
            vm.newrgb    = '';
            vm.newsymbol = '';

            // Update Current Pallete with new color
            palleteFactory.getPallete()
              .then(function(data){
                // DO Something WIth this
                console.log(data);
              }, function(data){
                console.error('error resolving getPallete promise: ', data);
              });
            }).error(function (err) {
              console.log('Error: ' + err);
            });
      };

    }
  };
}

angular.module('Crosstronica').
directive('addColor', addColor);
