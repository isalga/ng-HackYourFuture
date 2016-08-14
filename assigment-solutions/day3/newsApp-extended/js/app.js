angular.module('newsApp', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'newsController',
    templateUrl: '../pages/home.html',
  })
	.when('/category/:name', {
    controller: 'newsController',
    templateUrl: '../pages/home.html',
  })
  .when('/new/:index', {
    controller: 'newsController',
    templateUrl: '../pages/new.html',
  })
	.otherwise({
    controller: 'newsController',
    templateUrl: '../pages/home.html',
  });
})
.controller('newsController', ['$scope', '$location', '$routeParams', 'news', newsController])
.service('news', news)
.directive('newCard', newCard)
.directive('newDetails', newDetails)
.directive('orderBySelect', orderBySelect)
.directive('navBar', navBar)
.directive('searchInput', searchInput);
