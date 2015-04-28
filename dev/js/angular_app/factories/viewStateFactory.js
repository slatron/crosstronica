(function() {
    'use strict';

    angular
        .module('Crosstronica')
        .factory('viewStateFactory', viewStateFactory);

    function viewStateFactory() {

      var viewState = {
        centered: true,
        tracer: false,
        tracerTop: 100,
        tracerLeft: 220,
        tracerWidth: 50,
        gridSize: 'large-grid'
      };

      var availableSizes = ['tiny', 'small', 'medium', 'large'];

      var viewStateFactoryMethods = {};

      viewStateFactoryMethods.get = function() {
        return viewState;
      };

      viewStateFactoryMethods.centerGrid = function(centered) {
        if (centered) {
          viewState.centered = true;
        } else {
          viewState.centered = false;
        }
      };

      viewStateFactoryMethods.toggleTracer = function() {
        viewState.tracer = !viewState.tracer;
      };

      viewStateFactoryMethods.setTracerTop = function(newTop) {
        // Check for integer passed in + range
        if (newTop === parseInt(newTop, 10) && newTop < 401 && newTop > -601) {
          viewState.tracerTop = newTop;
        }
      };

      viewStateFactoryMethods.setTracerLeft = function(newLeft) {
        // Check for integer passed in + range
        if (newLeft === parseInt(newLeft, 10) && newLeft < 301 && newLeft > -701) {
          viewState.tracerLeft = newLeft;
        }
      };

      viewStateFactoryMethods.setTracerWidth = function(newWidth) {
        // Check for integer passed in + range
        if (newWidth === parseInt(newWidth, 10) && newWidth < 101 && newWidth > 0) {
          viewState.tracerWidth = newWidth;
        }
      };

      viewStateFactoryMethods.setGridSize = function(size) {
        if (_.indexOf(availableSizes, size) !== -1) {
          viewState.gridSize = [size, '-grid'].join('');
        }
      };

      return viewStateFactoryMethods;

    }
})();
