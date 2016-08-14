function newsController($scope, $location, $routeParams, news) {

  var SINGLE_NEW = $location.path().includes('new');
  var PERSISTED_DATA = (news.data) ? true : false;

  $scope.new;
  $scope.news;
  $scope.category = $routeParams.name;

  if (SINGLE_NEW) {

    if (PERSISTED_DATA) {
      console.info('data from storage');

      $scope.new = news.data[$routeParams.index];
    } else {
      console.info('data from API');

      news.getAll().then(function (response) {

        $scope.new = response.data.results[$routeParams.index];
        news.setData(response.data.results);
      }, function (error) {

        console.error(error);
      });
    }

  } else {
    if (PERSISTED_DATA) {
      console.info('data from storage');

      $scope.news = news.data;
    } else {
      console.info('data from API');

      news.getAll().then(function (response) {

        $scope.news = response.data.results;
        news.setData(response.data.results);
      }, function (error) {

        console.error(error);
      });
    }
  }
}
