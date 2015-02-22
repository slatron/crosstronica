/**
* paintMode:
* true  = paint with clicks
* false = add border with clicks
**/
function pageStateFactory() {

  var pageState = {
    authorized: false,
    borderSide: 'left'
  };

  var paintMode = true,
      selected  = {};

  var pageStateFactoryMethods = {};

  pageStateFactoryMethods.get = function() {
    return pageState;
  };

  pageStateFactoryMethods.paintMode = function(enablePaintMode) {
    if (enablePaintMode !== undefined)
      paintMode = enablePaintMode;
    else
      return paintMode;
  };

  pageStateFactoryMethods.selected = function(newColor) {
    if (newColor !== undefined)
      selected = newColor;
    else
      return selected;
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
