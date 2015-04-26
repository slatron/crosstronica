function patternFactory($http, $q) {

  var patternData = {
    name: '',
    grid: [],
    id: undefined,
    available: [],
    selected: {}
  };

  var dataLoaded = false;

  var patternFactoryMethods = {};

  // Initialize pattern data from server
  var _init = function() {

    var deferred = $q.defer();

    $http.get('/api/pattern').success(function(data) {
      // Set first in response as current grid
      if (data.length) {
        patternData.name = data[0].name;
        patternData.grid = _sanitizeGridData(data[0].grid);
        patternData.id   = data[0]._id;
        patternData.available = [];

        // Load all pattern options array
        _.each(data, function(pattern) {
          var patternOption = {
            name: pattern.name,
            id: pattern._id
          };
          patternData.available.push(patternOption);
        });

        patternData.selected = (patternData.available[0]);

      } else {
        patternData.name = 'Create a new Pattern to begin';
        patternData.grid = [];
        patternData.id   = undefined;
      }

      dataLoaded = true;
      deferred.resolve(patternData);
    }).error(function(e) {
      patternData.name = 'Create a new Pattern to begin';
      patternData.grid = [];
      patternData.id   = undefined;
      deferred.reject('An error occurred while querying the remote database');
    });

    return deferred.promise;
  };

  var _sanitizeGridPost = function(gridData) {

    var transformed = [];

    _.each(gridData, function(row, rowIdx) {

      transformed.push([]);

      _.each(row, function(square, colIdx) {

        console.log('original square: ', square);

        var borders = null;

        if (_.findIndex(square.borders, true) !== -1) {
          borders = square.borders;
        }

        // Only keep necessary data fields around
        var newSquare = {
          borders: borders,
          rgb: square.rgb,
          symbol: square.symbol
        };

        transformed[rowIdx].push(newSquare);

      });
    });

    return transformed;

  };

  var _sanitizeGridData = function(gridData) {

    // console.log('gridData: ', gridData);

    var transformed = [];

    _.each(gridData, function(row, rowIdx) {

      transformed.push([]);

      _.each(row, function(square, colIdx) {

        // console.log('original square: ', square);

        // Ensure there is a square object
        if(square === null) {
          square = {};
        }

        // Ensure there is a borders array
        if(!square.hasOwnProperty('borders')) {
          square.borders = [];
        }

        var borders = [];

        if (_.findIndex(square.borders, true) !== -1) {
          borders = square.borders;
        }

        // Only keep necessary data fields around
        var newSquare = {
          borders: borders,
          rgb: square.rgb,
          symbol: square.symbol
        };

        transformed[rowIdx].push(newSquare);

        // if(!rowIdx && !colIdx) {
        //   console.log('square: ', newSquare);
        //   console.log('newSqu: ', transformed[rowIdx][colIdx]);
        // }

      });
    });

    // console.log('transformed: ', transformed);

    return transformed;

  };

  patternFactoryMethods.get = function() {

    if (!dataLoaded) {
      _init();
      dataLoaded = true;
    }

    return patternData;
  };

  patternFactoryMethods.clearAvailable = function() {
    patternData.available = [];
  };

  patternFactoryMethods.clearCurrent = function() {
    patternData.selected = {};
    patternData.name     = 'Please load or create a new pattern.';
    patternData.grid     = [];
    patternData.id       = undefined;
  };

  patternFactoryMethods.load = function(id) {

    $http.get('/api/pattern/' + id).success(function(data) {
      patternData.name = data.name;
      patternData.grid = _sanitizeGridData(data.grid);
      patternData.id   = data._id;

      patternData.selected = {
        name: data.name,
        id: data._id
      };
    }).error(function(e) {
      console.error('An error occurred while querying the remote database');
    });
  };

  patternFactoryMethods.saveNew = function(pattern) {

    var deferred = $q.defer();

    $http.post('/api/pattern', pattern)
      .success(function(data) {
        patternData.id = data._id;
        deferred.resolve(data);
      }).error(function(e) {
        deferred.reject('An error occurred while POSTing a pattern to  the remote database');
      });

    return deferred.promise;

  };

  patternFactoryMethods.updatePattern = function(pattern, id) {

    var deferred = $q.defer();

    console.log('oringinal pattern: ', pattern);

    pattern.grid = _sanitizeGridPost(pattern.grid);

    console.log('post pattern: ', pattern);

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

    patternData.id       = undefined;
    patternData.selected = undefined;

    dataLoaded = true;
  };

  return patternFactoryMethods;

}

angular.module('Crosstronica').
factory('patternFactory', patternFactory);
