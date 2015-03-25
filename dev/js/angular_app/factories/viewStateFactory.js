(function() {
    'use strict';

    angular
        .module('Crosstronica')
        .factory('viewStateFactory', viewStateFactory);

    /* @ngInject */
    function viewStateFactory() {

      var viewState = {
          centered: false
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

      return viewStateFactoryMethods;

    }
})();
