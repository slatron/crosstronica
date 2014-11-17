function drawer() {

  return {
    restrict: 'E',
    replace: true,

    transclude: true,

    templateUrl: '/js/angular_app/directives/drawer/drawer.html',

    controller: function ($scope) {

      $scope.showDrawer = true;

    },

    link: function (scope, elem, attrs) {

      scope.closeDrawer = function() {
        scope.showDrawer = false;
      };

      scope.openDrawer = function() {
        scope.showDrawer = true;
      };
    }

  };
}

angular.module('Crosstronica').
directive('drawer', drawer);
