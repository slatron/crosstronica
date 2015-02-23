function pageState(pageStateFactory, patternFactory) {

  return {
    controllerAs: 'pageStateVM',
    bindToController: true,
    controller: function (Auth) {
      var vm = this;

      vm.pageState = pageStateFactory.getUserState();

      // function to handle logging out
      vm.doLogout = function() {
        Auth.logout();
        pageStateFactory.authorize(false);
        patternFactory.clearAvailable();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pageState', pageState);
