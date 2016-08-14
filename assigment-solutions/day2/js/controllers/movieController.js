function movieController($scope, movie) {

  $scope.films;
  $scope.selectedFilm;
  $scope.showAll = true;

  movie.getAll().then(function (response) {

      $scope.films = response.data;
      console.log(response.data);
    }, function (error) {

      console.error(error);
    });

  $scope.showOne = function (film) {
    $scope.selectedFilm = film;
    $scope.showAll = false;
  };
}
