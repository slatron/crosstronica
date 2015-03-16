function pageState(userStateFactory, patternFactory, viewStateFactory) {

  return {
    controllerAs: 'pageStateVM',
    bindToController: true,
    controller: function (Auth) {
      var vm = this;

      vm.userState = userStateFactory.get();
      vm.viewState = viewStateFactory.get();

      // function to handle logging out
      vm.doLogout = function() {
        Auth.logout();
        userStateFactory.authorize(false);
      };

      vm.centerGrid = function(centered) {
        if (centered) {
          viewFactory.centerGrid(true);
        } else {
          viewFactory.centerGrid(true);
        }
      };

    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
