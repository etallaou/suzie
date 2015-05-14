var app = angular.module('suzie', []);

app.controller("IndexController", function($scope){
	$scope.displayMenu = false;

	$scope.changeMenuState = function(){
		$scope.displayMenu = !$scope.displayMenu;
	}
});