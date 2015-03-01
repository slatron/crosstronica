function pallete() {

  return {
    scope: {},

    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/pallete/pallete.html',

    controllerAs: 'palleteVM',
    bindToController: true,

    controller: function (palleteFactory, drawStateFactory) {

      var vm = this;

      vm.pallete = {};

      palleteFactory.getPallete()
        .then(function(data){
          vm.pallete = data;
        }, function(data){
          console.error('error resolving getPallete promise: ', data);
        });

      vm.selectColor = function(color) {
        color = color || {};
        drawStateFactory.selected(color);
      };

      // Clear selected color
      vm.selectEraser = function() {
        drawStateFactory.selected();
      };
    }
  };

}

angular.module('Crosstronica').
directive('pallete', pallete);
