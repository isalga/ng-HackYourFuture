function news($http) {
  var API = 'http://api-nghyf.rhcloud.com/news';

  this.getAll = function () {
      return $http.get(API);
    };
}
