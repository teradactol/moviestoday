/**
 * Created by Bishaka on 21/09/2015.
 */


var moviestoday = angular.module('moviestoday',[])

.config(['$httpProvider',function($httpProvider){

    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
}])

.controller('appCtrl',['$scope','$http','urlSvs','$sce',function($scope,$http, urlSvs,$sce){

        var host = urlSvs.getApiHost();

        $scope.getYouTubeEmbed = function(url){
            console.log("Youtube url found : " + url);
            var embed_url = url.replace("watch?v=","embed/");
            console.log("Youtube embed url returned : " + embed_url);
            return $sce.trustAsResourceUrl(embed_url);
        };

        $scope.cinemax = {};
        $scope.cinemax.csoon = [
            {"title":"Loading","poster":"http://ia.media-imdb.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX640_SY720_.jpg"},
        ];
        $scope.cinemax.nshow = [
            {"title":"Loading","poster":"http://ia.media-imdb.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX640_SY720_.jpg"},
        ];

        $http.get(host+'/wscinemax/comingsoon',{withCredentials : true}).success(function(data){
            $scope.cinemax.csoon = data;
        });

        $http.get(host+'/wscinemax/nowshowing',{withCredentials : true}).success(function(data){
            $scope.cinemax.nshow = data;
        });
}])


.service('urlSvs',[function(){
      var m2de_api_host = "http://bt-njsmoviestoday.rhcloud.com";
      var _gut = {};

      _gut.getApiHost = function(){
          return m2de_api_host;
      };

      return _gut;
}]);