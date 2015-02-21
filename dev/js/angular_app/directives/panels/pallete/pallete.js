function pallete() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/panels/pallete/pallete.html',
    controller: function ($scope, $http, palleteFactory) {

      $scope.pallete  = [];

      var _init = function() {

        palleteFactory.getPallete()
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
