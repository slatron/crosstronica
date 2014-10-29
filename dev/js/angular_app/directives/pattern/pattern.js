function pattern() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/angular_app/directives/pattern/pattern.html',
    controller: function ($scope, $http, gridFactory, connection) {

      var rows = 10;
      var cols = 10;

      $scope.grid     = [];

      $scope.showGrid = false;

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
          gridFactory.getPallete()
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

      var _init = function() {
        $scope.grid = gridFactory.makeGrid(rows, cols);
      };

      _init();

    },

    link: function (scope, elem, attrs) {

      scope.paintCel = function(row, col, triggerDigest) {
        console.log('Paint Cel At: ', row, col);

        triggerDigest = triggerDigest || false;

        scope.grid[row][col] = scope.selected;

        if(triggerDigest) scope.$digest();
      };

    }
  };

}

angular.module('Crosstronica').
directive('pattern', pattern);
