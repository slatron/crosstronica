function patternFactory($http, $q) {

  var pattern = {
    name: '',
    grid: []
  };

  var patternFactoryMethods = {};

  patternFactoryMethods.get = function() {

    var deferred = $q.defer();

    $http.get('/api/pattern').success(function(data) {
      data = data[0];
      pattern.name = data.name;
      pattern.grid = data.grid;
      deferred.resolve(pattern);
    }).error(function(e) {
      deferred.reject('An error occurred while querying the remote database');
    });

    return deferred.promise;
  };

  return patternFactoryMethods;

}

angular.module('Crosstronica').
factory('patternFactory', patternFactory);
