var myapp=angular.module('kaifanla',['ng','ngRoute','ngAnimate']);
myapp.config(function($routeProvider){
	$routeProvider.when('/start',{
		templateUrl:'tpl/start.html',
		controller:'startCtrl'
	}).when('/main',{
		templateUrl:'tpl/main.html',
		controller:'mianCtrl'
	}).when('/detail/:did',{
		templateUrl:'tpl/detail.html',
		controller:'detaillCtrl'
	}).when('/personal',{
		templateUrl:'tpl/personal.html',
		controller:'personalCtrl'
	}).when('/order/:did',{
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
	 $('[ng-include]').hide();
	 $('body').css("margin-top" ,0);
}]);
myapp.controller('mianCtrl',['$scope',"$http",function($scope,$http){
	$('body').css("margin-top" ,60);
	$('[ng-include]').show();
	$scope.hasmore=true;
	$http.get('data/dish_getbypage.php?start=0').success(function(date){
		
		$scope.menuelist=date;
		console.log($scope.menuelist)
	})
	$scope.loadmore=function(){
		$http.get('data/dish_getbypage.php?start='+$scope.menuelist.length).success(function(date){
			$scope.menuelist=$scope.menuelist.concat(date);
			if(date.length<5){
				$scope.hasmore=false;
			}
		})
	}
	$scope.$watch('kw',function(){
       if($scope.kw){
            $http.get('data/dish_getbykw.php?kw='+$scope.kw).success(function(date){
                         $scope.menuelist=date;
			})
	   }else{
            $http.get('data/dish_getbypage.php?start=0').success(function(date){
				$scope.menuelist=date;
			})
	   }
	})

}]);
myapp.controller('detaillCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	$('[ng-include]').show();
	 $scope.foodid = $routeParams.did;
	 $http.get('data/dish_getbyid.php?id='+$routeParams.did).success(function(data){
                         $scope.food=data[0];
			})
}]);

myapp.controller('orderCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	$('[ng-include]').show();
	  $scope.orderList={"did":$routeParams.did};
	  $scope.submitOrder=function(){
		  sessionStorage.setItem("phone",$scope.orderList.phone)
		  $scope.args = $.param($scope.orderList)
		  $http.get('data/order_add.php?' + $scope.args).success(function (data) {
			  console.log(data)
			 if(data[0].msg=="succ"){
				 $scope.msgbox="订餐成功！您的订单编号为"+data[0].oid+"。您可以在用户中心查看订单状态。"
			 }else{
                $scope.errBox = "订餐失败！"
            } 
		  })
	  }
}]);

myapp.controller('personalCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$('[ng-include]').show();
    $http.get('data/order_getbyphone.php?phone='+ sessionStorage.getItem('phone')).success(function(data){
       
        $scope.myOrders = data;
		
        
    })

}]);
