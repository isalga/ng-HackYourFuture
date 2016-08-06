function country($http) {

  var URL = 'https://restcountries.eu/rest/v1/lang/es';
  var countries;

  this.getCountries = function () {
    return $http.get(URL);
  };

  this.setCountries = function (countries) {
    this.countries = countries;
  };
}
