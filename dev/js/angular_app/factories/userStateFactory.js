function userStateFactory() {

  var userState = {
    authorized: false
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

  return userStateFactoryMethods;

}

angular.module('Crosstronica').
factory('userStateFactory', userStateFactory);
