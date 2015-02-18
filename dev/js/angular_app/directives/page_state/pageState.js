function pageState(pageStateFactory) {

  return {
    controller: function ($scope, Auth) {

      $scope.pageState = pageStateFactory.get();

      // function to handle logging out
      $scope.doLogout = function() {
        Auth.logout();
        pageStateFactory.authorize(false);
      };

    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
