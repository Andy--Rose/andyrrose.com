angular.module('lights', [])
	.controller('LightsController', ['$routeParams', 
		function LightsController($routeParams){
			this.name = 'LightsController';
			this.params = $routeParams;
		}
	]);