function palleteFactory($http, $q) {

  var pallete = {
    colors: []
  };

  var palleteFactoryMethods = {};

  palleteFactoryMethods.getPallete = function() {

    var deferred = $q.defer();

    updatePallete()
      .then(function(data){
        pallete.colors = data;
        deferred.resolve(pallete);
      }, function(data){
        console.error('error resolving updatePallete promise: ', data);
        deferred.reject('error resolving updatePallete promise');
      });

    return deferred.promise;

  };

  var updatePallete = function() {

    var deferred = $q.defer();

    $http.get('/api/pallete').success(function(data) {
      console.log('data: ', data);
      for(var i = 0;i < data.length; i++) {
        // c_id helps to index the pallete array
        data[i].c_id = i;
      }
      deferred.resolve(data);
    }).error(function(e) {
      console.error('An error occurred while querying the remote database', e);

      // GET BACKUP FROM LOCAL JSON FILE
      $http.get('/json/pallete.json').success(function(data){
        console.error('Using local fallback pallete');
        deferred.resolve(data);
      }).error(function() {
        deferred.reject('There was an error getting local pallete.json file');
      });
    });

    return deferred.promise;

  };

  return palleteFactoryMethods;

}

angular.module('Crosstronica').
factory('palleteFactory', palleteFactory);
