angular.module('about', [])
	.controller('AboutController', ['$scope', '$routeParams', 'ExpandingBlockFactory',
		function AboutController($scope, $routeParams, ExpandingBlockFactory) {
			this.name = 'AboutController';
			this.params = $routeParams;
		}
	]);