angular.module('sortingApp', [
  'sortingApp.sort', 
  'sortingApp.service',
  'ngRoute'
  ])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'sorting/sorting.html',
    controller: 'sortingCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
