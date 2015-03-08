function drawStateFactory() {

  var drawState = {
    drawMode: 'paint',
    paint: {
      selected: {}
    },
    border: {
      borderSide: 'left',
      erase: false
    }
  };

  var drawStateFactoryMethods = {};

  drawStateFactoryMethods.get = function() {
    return drawState;
  };

  // Setter for drawMode
  drawStateFactoryMethods.setMode = function(mode) {
    if (_.contains(['paint', 'border'], mode)) {
      drawState.drawMode = mode;
    }
  };

  // Setter for border.erase
  drawStateFactoryMethods.setBorderMode = function(mode) {
    if (mode === 'draw')
      drawState.border.erase = false;
    if (mode === 'erase')
      drawState.border.erase = true;
  };

  // Setter for selected
  drawStateFactoryMethods.selected = function(newColor) {
    if (newColor !== undefined) {
      drawState.paint.selected = newColor;
    } else {
      drawState.paint.selected = {};
      drawState.border.erase   = true;
    }
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
