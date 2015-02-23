function drawer() {

  return {
    restrict: 'E',
    replace: true,

    scope: {},

    transclude: true,
    templateUrl: '/js/angular_app/directives/drawer/drawer.html',

    controllerAs: 'drawerVM',
    bindToController: true,

    controller: function () {

      this.showDrawer = true;

      this.closeDrawer = function() {
        this.showDrawer = false;
      };

      this.openDrawer = function() {
        this.showDrawer = true;
      };
    }

  };
}

angular.module('Crosstronica').
directive('drawer', drawer);
