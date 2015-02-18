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
    selected: {},
    showGrid: false
  };

  var pageStateFactoryMethods = {};

  pageStateFactoryMethods.get = function(key) {

    if (pageState.hasOwnProperty(key))
      return pageState[key];
    else
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
