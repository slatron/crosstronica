function addColor() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/add_color/addColor.html',
    controller: function ($scope, $http, palleteFactory, connection) {

      function postColor(colorObj) {
        // send post request
        $http.post(connection.pallete, colorObj)
          .success(function () {
            console.log('successful color post');

          // Clear New Color Form
          $scope.newname   = '';
          $scope.newrgb    = '';
          $scope.newsymbol = '';
          $scope.newdmc    = '';

          // Update Current Pallete with new color
          palleteFactory.getPallete()
            .then(function(data){
              $scope.pallete = data;
            }, function(data){
              console.error('error resolving getPallete promise: ', data);
            });
          }).error(function (err) {
            console.log('Error: ' + err);
          });
      }

      $scope.addColor = function() {
        var colorObj = {
          data: {
            name: $scope.newname,
            rgb: $scope.newrgb,
            symbol: $scope.newsymbol,
            dmc: $scope.newdmc
          }
        };
        postColor(colorObj);
      };

    }
  };
}

angular.module('Crosstronica').
directive('addColor', addColor);
