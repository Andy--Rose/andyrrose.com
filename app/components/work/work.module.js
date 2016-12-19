angular.module('work', [])
	.controller('WorkController', ['$scope', '$routeParams', 
		function ($scope, $routeParams) {
			this.name = 'WorkController';
			this.params = $routeParams;
		}
	]);