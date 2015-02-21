function addColor() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/add_color/addColor.html',
    controller: function ($scope, $http, palleteFactory) {

      function postColor(colorObj) {
        // send post request
        $http.post('/api/pallete', colorObj)
          .success(function () {
            console.log('successful color post');

          // Clear New Color Form
          $scope.newname   = '';
          $scope.newrgb    = '';
          $scope.newsymbol = '';

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
            symbol: $scope.newsymbol
          }
        };
        postColor(colorObj);
      };

    }
  };
}

angular.module('Crosstronica').
directive('addColor', addColor);
