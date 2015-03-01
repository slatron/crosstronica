/**
* paintMode:
* true  = paint with clicks
* false = add border with clicks
**/
function pageStateFactory() {

  var pageState = {
    drawMode: 'paint',
    paint: {
      selected: {}
    },
    border: {
      borderSide: 'left'
    }
  };

  var pageStateFactoryMethods = {};

  pageStateFactoryMethods.get = function() {
    return pageState;
  };

  // Setters for paintMode
  pageStateFactoryMethods.paintMode = function() {
    pageState.drawMode = 'paint';
  };

  pageStateFactoryMethods.borderMode = function() {
    pageState.drawMode = 'border';
  };
  // Setter for selected
  pageStateFactoryMethods.selected = function(newColor) {
    if (newColor !== undefined)
      pageState.paint.selected = newColor;
    else
      pageState.paint.selected = {};
  };

  // Setter for borderSide
  pageStateFactoryMethods.borderSide = function(newBorder) {
    if (newBorder !== undefined)
      pageState.border.borderSide = newBorder;
    else
      console.error('newBorder is required by borderside()');
  };

  return pageStateFactoryMethods;

}

angular.module('Crosstronica').
factory('pageStateFactory', pageStateFactory);
