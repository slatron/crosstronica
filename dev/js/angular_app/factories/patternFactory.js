function patternFactory($http, $q) {

  var patternData = {
    name: '',
    grid: [],
    id: undefined,
    available: []
  };

  var patternFactoryMethods = {};

  patternFactoryMethods.get = function() {
    return patternData;
  };

  patternFactoryMethods.clearAvailable = function() {
    patternData.available = [];
  };

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

  patternFactoryMethods.init = function() {

    var deferred = $q.defer();

    $http.get('/api/pattern').success(function(data) {
      // Set first in response as current grid
      data = data[1];
      patternData.name = data.name;
      patternData.grid = data.grid;
      patternData.id   = data._id;
      deferred.resolve(patternData);
    }).error(function(e) {
      deferred.reject('An error occurred while querying the remote database');
    });

    return deferred.promise;
  };

  patternFactoryMethods.load = function(id) {

    $http.get('/api/pattern/' + id).success(function(data) {
      patternData.name = data.name;
      patternData.grid = data.grid;
      patternData.id   = data._id;
    }).error(function(e) {
      console.error('An error occurred while querying the remote database');
    });
  };

  patternFactoryMethods.saveNew = function(pattern) {

    var deferred = $q.defer();

    $http.post('/api/pattern', pattern)
      .success(function(data) {
        console.log('TODO: store new pattern ID');
        deferred.resolve(data);
      }).error(function(e) {
        deferred.reject('An error occurred while POSTing a pattern to  the remote database');
      });

    return deferred.promise;

  };

  patternFactoryMethods.updatePattern = function(pattern, id) {

    var deferred = $q.defer();

    $http.put('/api/pattern/' + id, pattern)
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(e) {
        deferred.reject('An error occurred while POSTing a pattern to  the remote database');
      });

    return deferred.promise;

  };

  patternFactoryMethods.deletePattern = function(id) {

    var deferred = $q.defer();

    $http.delete('/api/pattern/' + id)
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(e) {
        deferred.reject('An error occurred while DELETEing a pattern from the remote database');
      });

    return deferred.promise;

  };

  patternFactoryMethods.createNew = function(specs) {

    patternData.name = specs.name || '';
    patternData.grid = [];

    var rows = specs.rows,
        cols = specs.cols;

    for(var i=0; i < rows; i++) {
      var thisRow = [];

      for(var j=0; j<cols; j++) {
        thisRow.push({
          borders: [false, false, false, false]
        });
      }

      patternData.grid[i] = thisRow;
    }

    patternData.id = undefined;
  };

  return patternFactoryMethods;

}

angular.module('Crosstronica').
factory('patternFactory', patternFactory);
