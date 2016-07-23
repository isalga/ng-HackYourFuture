angular.module('myApp')
    .controller("myController", ['$scope', myController]);

function myController($scope) {
    $scope.message = "hello";
}