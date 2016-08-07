function movie($http) {

  this.getAll = function () {
      return $http.get('http://api-nghyf.rhcloud.com/films');
    };
}
