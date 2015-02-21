/**
* paintMode:
* true  = paint with clicks
* false = add border with clicks
**/
function pageStateFactory() {

  var pageState = {
    authorized: false,
    borderSide: 'left',
    paintMode: true,
    selected: {}
  };

  var pageStateFactoryMethods = {};

  pageStateFactoryMethods.get = function() {
    return pageState;
  };

  pageStateFactoryMethods.authorize = function(authorized) {
    authorized = authorized || false;

    if (authorized)
      pageState.authorized = true;
    else
      pageState.authorized = false;
  };

  return pageStateFactoryMethods;

}

angular.module('Crosstronica').
factory('pageStateFactory', pageStateFactory);
