function countriesController($scope, country) {

  $scope.countries;
  // $scope.order = '-population';

  country.getCountries().then(function (response) {

    console.log(response.data);
    $scope.countries = response.data;
  }, function (error) {

    console.error(error);
  });
}
