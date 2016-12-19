angular.module('info', [])
	.controller('InfoController', ['$scope', '$routeParams', 
		function ($scope, $routeParams) {
			this.name = 'InfoController';
			this.params = $routeParams;
		}
	]);