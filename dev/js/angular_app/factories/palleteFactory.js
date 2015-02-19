function palleteFactory($http, $q, connection) {

  var palleteFactoryMethods = {};

  palleteFactoryMethods.getPallete = function() {

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
        console.error('An error occurred while querying the database', e);

        // GET BACKUP FROM LOCAL JSON FILE
        $http.get('/json/pallete.json').success(function(data){
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
