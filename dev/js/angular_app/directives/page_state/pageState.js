function pageState(userStateFactory, patternFactory) {

  return {
    controllerAs: 'pageStateVM',
    bindToController: true,
    controller: function (Auth) {
      var vm = this;

      vm.userState = userStateFactory.get();

      // function to handle logging out
      vm.doLogout = function() {
        Auth.logout();
        userStateFactory.authorize(false);
        patternFactory.clearAvailable();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
