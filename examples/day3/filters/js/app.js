angular.module('countriesApp', ['angular.filter'])
.controller('countriesController', ['$scope', 'country', countriesController])
.service('country', country);
