angular.module('countriesApp', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'countriesController',
    templateUrl: '../pages/countries-list.html',
  })
	.when('/about', {
    templateUrl: '../pages/about.html',
  })
	.when('/detail/:name', {
    controller: 'countriesController',
    templateUrl: '../pages/country.html',
  })
	.otherwise({
    controller: 'countriesController',
    templateUrl: '../pages/countries-list.html',
  });
})
.controller('countriesController', ['$scope', '$location', '$routeParams', 'country', countriesController])
.service('country', country);
