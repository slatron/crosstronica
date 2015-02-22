/**
* paintMode:
* true  = paint with clicks
* false = add border with clicks
**/
function pageStateFactory() {

  var pageState = {
    authorized: false,
    selected: {},
    paintMode: true,
    borderSide: 'left'
  };

  var pageStateFactoryMethods = {};

  pageStateFactoryMethods.get = function() {
    return pageState;
  };

  // Setter for paintMode
  pageStateFactoryMethods.paintMode = function(enablePaintMode) {
    if (enablePaintMode !== undefined)
      enablePaintMode = false;
    paintMode = enablePaintMode;
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
      pageState.authorized = true;
    else
      pageState.authorized = false;
  };

  return pageStateFactoryMethods;

}

angular.module('Crosstronica').
factory('pageStateFactory', pageStateFactory);
