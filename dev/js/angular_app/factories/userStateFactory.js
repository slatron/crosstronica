function userStateFactory() {

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

    if (authorized)
      userState.authorized = true;
    else
      userState.authorized = false;
  };

  userStateFactoryMethods.setUserName = function(name) {
    userState.name = name || '';
  };

  userStateFactoryMethods.setGuest = function() {
    userState.guest = true;
  };

  return userStateFactoryMethods;

}

angular.module('Crosstronica').
factory('userStateFactory', userStateFactory);
