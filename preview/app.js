/**
 * Created by Bishaka on 21/09/2015.
 */


var moviestoday = angular.module('moviestoday',[])

.config(['$httpProvider',function($httpProvider){

    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
}])

.controller('appCtrl',['$scope','$http',function($scope,$http){

        $scope.cinemax = {};
        $scope.cinemax.csoon = [
            {"title":"Loading","poster":"http://ia.media-imdb.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX640_SY720_.jpg"},
        ];
        $scope.cinemax.nshow = [
            {"title":"Loading","poster":"http://ia.media-imdb.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX640_SY720_.jpg"},
        ];

        $http.get('http://bt-njsmoviestoday.rhcloud.com/wscinemax/comingsoon',{withCredentials : true}).success(function(data){
            $scope.cinemax.csoon = data;
        });

        $http.get('http://bt-njsmoviestoday.rhcloud.com/wscinemax/nowshowing',{withCredentials : true}).success(function(data){
            $scope.cinemax.nshow = data;
        });
}]);