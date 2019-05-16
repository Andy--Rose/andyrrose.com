angular.module('lights', [])
	.controller('LightsController', ['$scope', '$routeParams', 
		function LightsController($scope, $routeParams) {
			this.name = 'LightsController';
			this.params = $routeParams;
		}
	]);