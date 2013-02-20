// Declare app level module which depends on filters, and services
angular
  .module("myApp", [
    "myApp.filters",
    "myApp.services",
    "myApp.directives",
    "myApp.controllers"
  ])
  .config([
    "$routeProvider", "$locationProvider",
    function( $routeProvider, $locationProvider ) {
      $routeProvider.
        when("/", {
          templateUrl: "partials/index",
          controller: "index"
        })
        // other routes...
        .otherwise({
          redirectTo: "/"
        });

      $locationProvider.html5Mode(true);
    }
  ]);
