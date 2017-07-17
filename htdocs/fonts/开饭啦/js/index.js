var myapp=angular.module('kaifanla',['ng','ngRoute','ngAnimate']);
myapp.config(function($routeProvider){
	$routeProvider.when('/start',{
		templateUrl:'tpl/start.html',
		controller:'startCtrl'
	}).when('/main',{
		templateUrl:'tpl/main.html',
		controller:'mianCtrl'
	}).when('/detail',{
		templateUrl:'tpl/detail.html',
		controller:'detaillCtrl'
	}).when('/personal',{
		templateUrl:'tpl/personal.html',
		controller:'personalCtrl'
	}).when('/order',{
		templateUrl:'tpl/order.html',
		controller:'orderCtrl'
	}).otherwise({redirectTo:'/start'})
});
myapp.controller('parentCtrl',['$scope','$location',function($scope, $location){
	  $scope.jump=function(url){
	  	$location.path(url)
	  };
}]);
myapp.controller('startCtrl',['$scope',function($scope){
	
}]);
myapp.controller('mianCtrl',['$scope',"$http",function($scope,$http){
	$scope.hasmore=true;
	$http.get('data/dish_getbypage.php?start=0').success(function(date){
		$scope.menuelist=date;
	})
	$scope.loadmore=function(){
		$http.get('data/dish_getbypage.php?start='+$scope.menuelist.length).success(function(date){
			$scope.menuelist=$scope.menuelist.concat(date);
			if(date.length<5){
				$scope.hasmore=false;
			}
		})
	}
	
}]);
myapp.controller('detaillCtrl',['$scope',function($scope){
	
}]);
myapp.controller('personalCtrl',['$scope',function($scope){
	
}]);
myapp.controller('orderCtrl',['$scope',function($scope){
	
}]);