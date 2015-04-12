(function() {
    'use strict';

    angular
        .module('Crosstronica')
        .factory('viewStateFactory', viewStateFactory);

    function viewStateFactory() {

      var viewState = {
          centered: true,
          tracer: false
      };

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

      return viewStateFactoryMethods;

    }
})();
