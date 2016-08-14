angular.module('newsApp', [])
.controller('newsController', ['$scope', 'news', newsController])
.service('news', news)
.directive('newCard', newCard)
.directive('orderBySelect', orderBySelect)
.directive('categoryPicker', categoryPicker)
.directive('searchInput', searchInput);
