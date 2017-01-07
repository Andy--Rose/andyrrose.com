angular.module('papers', [])
	.controller('PapersController', ['$scope', '$routeParams', 
		function($scope, $routeParams){
			this.name = "PapersController";
			this.params = $routeParams;
		}
	]);