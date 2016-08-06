function countriesController($scope, $location, $routeParams, country) {

  $scope.countries;
  $scope.country;

  if ($location.path().includes('detail')) {

    var paramName = $routeParams.name;

    country.countries.map(function (item) {

      if (item.name == paramName) {
        $scope.country = item;
      }
    });

  } else {
    country.getCountries().then(function (response) {

      $scope.countries = response.data;
      country.setCountries(response.data);
    }, function (error) {

      console.error(error);
    });
  }
}
