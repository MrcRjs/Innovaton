var app = angular.module('teleferico',[]);

app.controller('teleController',function  ($scope, $http) {

	$scope.flag1 = false;
	$scope.flag2 = true;

	$scope.hideShow = function (){

		if ($scope.flag2){
			$scope.flag1 = true;
			$scope.flag2 = false;
		}
		else{
			$scope.flag1 = false;
			$scope.flag2 = true;
		}

	}

})