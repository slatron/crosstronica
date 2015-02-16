function loginScreen() {

  return {
    restrict: 'E',
    replace: true,

    scope: {},

    templateUrl: '/js/angular_app/directives/login_screen/loginScreen.html',

    controller: function ($scope, $location, Auth) {
      $scope.authorized =  Auth.isLoggedIn();

      // get user information on page load
      Auth.getUser()
        .then(function(data) {
          console.log('User data: ', data);
          $scope.user = data.data;
        });

      // function to handle login form
      $scope.doLogin = function() {
        $scope.processing = true;

        // clear the error
        $scope.error = '';

        Auth.login($scope.loginData.username, $scope.loginData.password)
          .success(function(data) {
            $scope.processing = false;

            // if a user successfully logs in, redirect to users page
            if (data.success)
              $location.path('/index.html#success');
            else
              $scope.error = data.message;

          });
      };

      // function to handle logging out
      $scope.doLogout = function() {
        Auth.logout();
        $location.path('/login');
      };

    },


    link: function (scope, elem, attrs) {

    }

  };
}

angular.module('Crosstronica').
directive('loginScreen', loginScreen);
