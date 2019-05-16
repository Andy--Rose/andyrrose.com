angular.module('papers', [])
	.controller('PapersController', ['$scope', '$routeParams', 
		function PapersController($scope, $routeParams) {
			this.name = 'PapersController';
			this.params = $routeParams;
		}
	]);