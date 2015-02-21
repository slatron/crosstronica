function addColor() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/add_color/addColor.html',
    controller: function ($scope, $http, palleteFactory) {

      $scope.addColor = function () {

        console.log('attempting post');

        var colorObj = {
          name: $scope.newname,
          rgb: $scope.newrgb,
          symbol: $scope.newsymbol
        };

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

    }
  };
}

angular.module('Crosstronica').
directive('addColor', addColor);
