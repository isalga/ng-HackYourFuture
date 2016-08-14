function news($http) {
  var API = 'http://api-nghyf.rhcloud.com/news';
  var data;

  this.getAll = function () {
    return $http.get(API);
  };

  this.setData = function (data) {
    this.data = data;
  };
}
