angular.module('projects', [])
	.controller('ProjectsController', ['$scope', 'CarouselVideoFactory', '$routeParams', 
		function($scope, CarouselVideoFactory, $routeParams){
			this.name = 'ProjectsController';
			this.params = $routeParams;

			$scope.initCarouselVideo = function() {
				CarouselVideoFactory.initCarouselVideo();
			};

			$scope.embedCarouselVideo = function(url) {
				CarouselVideoFactory.embedCarouselVideo(url);
			};
		}
	]);