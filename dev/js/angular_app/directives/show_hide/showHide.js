function showHide() {

  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      scope.collapsed = attrs.collapsed;

      scope.toggleMe = function() {
        console.log(scope.collapsed);
        scope.collapsed = !scope.collapsed;
      };

    }
  };

}

angular.module('Crosstronica').
directive('showHide', showHide);
