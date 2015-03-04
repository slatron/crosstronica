angular.module('Crosstronica', ['authService'])

// application configuration to integrate token into requests
.config(function($httpProvider) {

  // Uncomment before production
  // $compileProvider.debugInfoEnabled(false);

  // attach our auth interceptor to the http requests
  $httpProvider.interceptors.push('AuthInterceptor');

});
