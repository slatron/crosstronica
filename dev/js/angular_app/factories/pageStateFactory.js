/**
* paintMode:
* true  = paint with clicks
* false = add border with clicks
**/
function pageStateFactory() {

  var pageState = {
    selected: {},
    paintMode: true,
    borderSide: 'left'
  };

  var userState = {
    authorized: false
  };

  var pageStateFactoryMethods = {};

  pageStateFactoryMethods.get = function() {
    return pageState;
  };

  pageStateFactoryMethods.getSelected = function() {
    return pageState.selected;
  };

  // Setter for paintMode
  pageStateFactoryMethods.paintMode = function(enablePaintMode) {
    if (enablePaintMode !== undefined)
      pageState.paintMode = enablePaintMode;
    else
      pageState.paintMode = false;
  };

  // Setter for selected
  pageStateFactoryMethods.selected = function(newColor) {
    if (newColor !== undefined)
      pageState.selected = newColor;
    else
      pageState.selected = {};
  };

  // Setter for borderSide
  pageStateFactoryMethods.borderSide = function(newBorder) {
    if (newBorder !== undefined)
      borderSide = newBorder;
    else
      console.error('newBorder is required by borderside()');
  };

  // Setter for authorized
  pageStateFactoryMethods.authorize = function(authorized) {
    authorized = authorized || false;

    if (authorized)
      userState.authorized = true;
    else
      userState.authorized = false;
  };

  return pageStateFactoryMethods;

}

angular.module('Crosstronica').
factory('pageStateFactory', pageStateFactory);
