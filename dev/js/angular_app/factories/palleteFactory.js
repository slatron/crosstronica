function palleteFactory($http, $q) {

  var pallete = {
    colors: []
  };

  var dataLoaded = false;

  var palleteFactoryMethods = {};

  var _init = function() {

    var deferred = $q.defer();

    $http.get('/api/pallete').success(function(data) {
      for(var i = 0;i < data.length; i++) {
        pallete.colors = data;
      }
      dataLoaded = true;
      deferred.resolve(data);
    }).error(function(e) {
      console.error('An error occurred while querying the remote database', e);

      // GET BACKUP FROM LOCAL JSON FILE
      $http.get('/json/pallete.json').success(function(data){
        console.error('Using local fallback pallete');
        pallete.colors = data;
        dataLoaded = true;
        deferred.resolve(data);
      }).error(function() {
        deferred.reject('There was an error getting local pallete.json file');
      });
    });

    return deferred.promise;

  };

  palleteFactoryMethods.get = function() {

    if (!dataLoaded) {
      _init();
    }

    return pallete;

  };

  palleteFactoryMethods.deleteColor = function(colorId) {

    var deferred = $q.defer();

    $http.delete('/api/pallete/' + colorId)
      .success(function(data) {
        var deleteId = data.color_id;

        var deleteColor = _.find(pallete.colors, {_id: deleteId});

        pallete.colors = _.without(pallete.colors, deleteColor);
        deferred.resolve(data);
      }).error(function(e) {
        deferred.reject('An error occurred while deleting a show from the remote database');
      });

    return deferred.promise;

  };

  palleteFactoryMethods.addColor = function(color) {

    var deferred = $q.defer();

    $http.post('/api/pallete', color)
      .success(function(data) {
        console.log('pallete data: ', data);
        pallete.colors.push(data);
        deferred.resolve(data);
      }).error(function(e) {
        deferred.reject('An error occurred while POSTing a pattern to  the remote database');
      });

    return deferred.promise;

  };

  return palleteFactoryMethods;

}

angular.module('Crosstronica').
factory('palleteFactory', palleteFactory);
