function pallete() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pallete/pallete.html',
    controller: function ($scope, $http, gridFactory) {

      $scope.pallete  = [];

      var _init = function() {

        gridFactory.getPallete()
          .then(function(data){
            $scope.pallete = data;
          }, function(data){
            console.error('error resolving getPallete promise: ', data);
          });
      };

      _init();

    }
  };

}

angular.module('Crosstronica').
directive('pallete', pallete);
