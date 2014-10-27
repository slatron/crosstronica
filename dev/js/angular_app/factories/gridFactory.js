function gridFactory($http, $q, connection) {

  var gridFactoryMethods = {};

  gridFactoryMethods.getPallete = function() {

    var deferred = $q.defer();

    $http.get(connection.pallete + '/_design/pallete/_view/getAll')
      .success(function(data) {
        for(var i = 0;i < data.rows.length; i++) {
          data.rows[i] = data.rows[i].value;

          // c_id helps to index the pallete array
          data.rows[i].c_id = i;
        }
        deferred.resolve(data.rows);
      }).error(function(e) {
        deferred.reject('There was an error getting pallete data');
        console.error('error with GET pallete', e);
    });

    return deferred.promise;

    // FROM JSON FILE
    // var deferred = $q.defer();

    // $http.get('/json/pallete.json').success(function(data){
    //   deferred.resolve(data);
    // }).error(function() {
    //   deferred.reject('There was an error getting pallete.json');
    // });

    // return deferred.promise;
  };

  gridFactoryMethods.makeGrid = function(rows, cols) {

    var grid = [];

    // Insert row arrays in grid array
    for(i=0; i < rows; i++) {
      var thisRow = new Array(cols);
      grid[i] = thisRow;
    }

    var aRow = [];

    for(i=0;i<cols;i++) {
      aRow[i] = {};
    }

    // Fill grid with numbers 0 to grid size
    for(i=0; i < rows; i++) {
      var start = cols * i,
          end   = (cols * i) + cols;

      grid[i] = _.clone(aRow, true);
    }

    return grid;

  };

  return gridFactoryMethods;

}

angular.module('Crosstronica').
factory('gridFactory', gridFactory);
