function loginScreen(userStateFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,

    controllerAs: 'loginVM',
    bindToController: true,

    templateUrl: '/js/angular_app/directives/login_screen/loginScreen.html',

    controller: function (Auth) {

      var vm = this;

      // Determine initial login state
      userStateFactory.authorize(Auth.isLoggedIn());

      // get user information on page load
      Auth.getUser()
        .then(function(data) {
          console.log('USER DATA: ', data);
          userStateFactory.setUserName(data.data.name);
          if (data.data.name === 'Guest')
            userStateFactory.setGuest();
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
              userStateFactory.authorize(true);
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
