function loginScreen(pageStateFactory) {

  return {
    restrict: 'E',
    replace: true,

    scope: {},

    controllerAs: 'loginVM',
    bindToController: true,

    templateUrl: '/js/angular_app/directives/login_screen/loginScreen.html',

    controller: function (Auth) {

      var vm = this;

      // Determine initial login state
      console.log(Auth.isLoggedIn());
      pageStateFactory.authorize(Auth.isLoggedIn());

      // get user information on page load
      Auth.getUser()
        .then(function(data) {
          console.log('User data: ', data);
          vm.user = data.data;
        });

      // function to handle login form
      vm.doLogin = function() {
        vm.processing = true;

        // clear the error
        vm.error = '';

        Auth.login(vm.username, vm.password)
          .success(function(data) {
            vm.processing = false;

            if (data.success) {
              pageStateFactory.authorize(true);
              console.log('successful login: ', data);
            } else {
              vm.error = data.message;
              console.log('error on login: ', data);
            }

          });
      };

    }

  };
}

angular.module('Crosstronica').
directive('loginScreen', loginScreen);
