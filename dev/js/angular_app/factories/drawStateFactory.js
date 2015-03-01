/**
* paintMode:
* paint  = paint with clicks
* border = add border with clicks
**/
function drawStateFactory() {

  var drawState = {
    drawMode: 'paint',
    paint: {
      selected: {}
    },
    border: {
      borderSide: 'left'
    }
  };

  var drawStateFactoryMethods = {};

  drawStateFactoryMethods.get = function() {
    return drawState;
  };

  // Setters for paintMode
  drawStateFactoryMethods.paintMode = function() {
    drawState.drawMode = 'paint';
  };

  drawStateFactoryMethods.borderMode = function() {
    drawState.drawMode = 'border';
  };
  // Setter for selected
  drawStateFactoryMethods.selected = function(newColor) {
    if (newColor !== undefined)
      drawState.paint.selected = newColor;
    else
      drawState.paint.selected = {};
  };

  // Setter for borderSide
  drawStateFactoryMethods.borderSide = function(newBorder) {
    if (newBorder !== undefined)
      drawState.border.borderSide = newBorder;
    else
      console.error('newBorder is required by borderside()');
  };

  return drawStateFactoryMethods;

}

angular.module('Crosstronica').
factory('drawStateFactory', drawStateFactory);
