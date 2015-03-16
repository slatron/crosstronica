(function() {
  'use strict';

  angular
      .module('Crosstronica')
      .factory('userStateFactory', userStateFactory);

  /* @ngInject */
  function userStateFactory(Auth) {

    var userState = {
      authorized: false,
      name: '',
      guest: false
    };

    var userStateFactoryMethods = {};

    userStateFactoryMethods.get = function() {
      return userState;
    };

    // Setter for authorized
    userStateFactoryMethods.authorize = function(authorized) {
      authorized = authorized || false;

      if (!authorized) {
        userState.authorized = false;
        userState.name = '';
        userState.guest = false;
      } else {
        userState.authorized = true;
        Auth.getUser().then(
          function(data) {
            console.log('User Data: ', data);
            userStateFactoryMethods.setUserName(data.data.name);
          },
          function(error) {
            console.error('ERROR GETTING USER DATA: ', error);
          }
        );
      }
    };

    userStateFactoryMethods.setUserName = function(name) {
      userState.name = name || '';
      if (name === 'Guest')
        userState.guest = true;
    };

    return userStateFactoryMethods;

  }

})();
