function selectedColor(pageStateFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,

    templateUrl: '/js/angular_app/directives/panels/selected_color/selectedColor.html',

    controllerAs: 'selectedVM',
    bindToController: true,

    controller: function () {
      var vm = this;

      vm.pageState = pageStateFactory.get();
    }
  };

}

angular.module('Crosstronica').
directive('selectedColor', selectedColor);
