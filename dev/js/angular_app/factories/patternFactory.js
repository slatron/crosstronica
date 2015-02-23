function patternFactory($http, $q) {

  var patternData = {
    name: '',
    grid: [],
    available: []
  };

  var patternFactoryMethods = {};

  patternFactoryMethods.getAvailable = function() {
    var deferred = $q.defer();

    $http.get('/api/pattern').success(function(data) {

      // Load all pattern options array
      _.each(data, function(pattern) {
        var patternOption = {
          name: pattern.name,
          id: pattern._id
        };
        patternData.available.push(patternOption);
      });

      // Set first in response as current grid
      deferred.resolve(patternData);
    }).error(function(e) {
      deferred.reject('An error occurred while querying the remote database');
    });

    return deferred.promise;
  };

  patternFactoryMethods.get = function() {

    var deferred = $q.defer();

    $http.get('/api/pattern').success(function(data) {
      // Set first in response as current grid
      data = data[0];
      patternData.name = data.name;
      patternData.grid = data.grid;
      deferred.resolve(patternData);
    }).error(function(e) {
      deferred.reject('An error occurred while querying the remote database');
    });

    return deferred.promise;
  };

  patternFactoryMethods.load = function(id) {

    var deferred = $q.defer();

    $http.get('/api/pattern/' + id).success(function(data) {
      patternData.name = data.name;
      patternData.grid = data.grid;
      deferred.resolve(patternData);
    }).error(function(e) {
      deferred.reject('An error occurred while querying the remote database');
    });

    return deferred.promise;
  };

  return patternFactoryMethods;

}

angular.module('Crosstronica').
factory('patternFactory', patternFactory);
