app.controller('MainController', function($scope, $http, $timeout, Weather, UserService, instagram) {
  // Build the date object
  $scope.date = {};
  // Update function
  var updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  }
  // Kick off the update function
  updateTime();

  $scope.weather = {}
  // Hardcode San_Francisco for now

  $scope.user = UserService.user;
  Weather.getWeatherForecast($scope.user.location)
  //Weather.getWeatherForecast("CA/San_Francisco")
  //Weather.getWeatherForecast("NY/New_York")
  .then(function(data) {
    $scope.weather.forecast = data;
  });

  $scope.kaka = 'k';


  //$http.get('https://rest-service.guides.spring.io/greeting').
  //$http.get('https://api.instagram.com/v1/tags/sayajual/media/recent?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK').
//  $http.get('https://api.instagram.com/v1/tags/sayajual/media/recent?client_id=642176ece1e7445e99244cec26f4de1f').
    //    success(function(data) {
    //        $scope.lala = data;
    //    });

$scope.pics = [];
$scope.caption=[];
$scope.link = [];    
      
      $scope.getMore = function() {
        instagram.fetchPopular(function(data) {
            for(var i=0; i<data.length; i++) {
              
                $scope.pics.push(data[i].images.standard_resolution.url) ;
                $scope.caption.push(data[i].caption.text) ;
                $scope.link.push(data[i].link) ;
            
            }
        });
      };
      $scope.getMore();
    


       


});
