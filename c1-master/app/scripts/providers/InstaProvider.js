app.factory('instagram', function($http) {
  return {
    fetchPopular: function(callback) {

      var endPoint = "https://api.instagram.com/v1/tags/sayajual/media/recent?access_token=42402085.1677ed0.4df501c4f0a94da09132d6f8ed483c01&callback=JSON_CALLBACK";

      $http.jsonp(endPoint).success(function(response) {
        callback(response.data);
      });
    }
  }
}                                           
);




