angular.module('projects', [])
	.controller('ProjectsController', ['$scope', '$routeParams', 
		function ProjectsController($scope, $routeParams) {
			this.name = 'ProjectsController';
			this.params = $routeParams;
		}
	]);