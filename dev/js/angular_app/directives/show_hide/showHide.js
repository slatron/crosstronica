function showHide() {

  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      scope.collapsed = true;

      if (attrs.opened) {
        scope.collapsed = false;
      }

      scope.toggleMe = function() {
        scope.collapsed = !scope.collapsed;
      };

    }
  };

}

angular.module('Crosstronica').
directive('showHide', showHide);
