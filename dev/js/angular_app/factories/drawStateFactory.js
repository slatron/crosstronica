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

  // Setter for drawMode
  drawStateFactoryMethods.setMode = function(mode) {
    if (_.contains(['paint', 'border'], mode)) {
      console.log('setting drawMode to ', mode);
      drawState.drawMode = mode;
    }
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
