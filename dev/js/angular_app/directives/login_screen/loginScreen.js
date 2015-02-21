function loginScreen(pageStateFactory) {

  return {
    restrict: 'E',
    replace: true,

    scope: {},

    controllerAs: 'loginVM',
    bindToController: true,

    templateUrl: '/js/angular_app/directives/login_screen/loginScreen.html',

    controller: function (Auth) {
      // Determine initial login state
      pageStateFactory.authorize(Auth.isLoggedIn());

      // get user information on page load
      Auth.getUser()
        .then(function(data) {
          console.log('User data: ', data);
          this.user = data.data;
        });

      // function to handle login form
      this.doLogin = function() {
        this.processing = true;

        // clear the error
        this.error = '';

        Auth.login(this.username, this.password)
          .success(function(data) {
            this.processing = false;

            if (data.success) {
              pageStateFactory.authorize(true);
              console.log('successful login: ', data);
            } else {
              this.error = data.message;
              console.log('error on login: ', data);
            }

          });
      };

    }

  };
}

angular.module('Crosstronica').
directive('loginScreen', loginScreen);
