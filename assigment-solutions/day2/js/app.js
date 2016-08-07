angular.module('movieApp', [])
.controller('movieController', ['$scope', 'movie', movieController])
.service('movie', movie)
.directive('movieCard', movieCard)
.directive('movieDetails', movieDetails);
