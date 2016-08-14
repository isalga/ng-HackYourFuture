function newsController($scope, news) {

  $scope.news;

  news.getAll().then(function (response) {

      $scope.news = response.data.results;
    }, function (error) {

      console.error(error);
    });
}
