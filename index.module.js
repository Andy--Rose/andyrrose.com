var appModule = angular.module('andyrrose.com', ['ngRoute', 'navigation', 'home', 'about', 'info', 'work']);

appModule.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				template: '<home></home>'
			})
			.when('/about', {
				template: "<about></about>"
			})
			.when('/info', {
				template: "<info></info>"
			})
			.when('/work', {
				template: "<work></work>"
			})
			.otherwise('/');
		$locationProvider.html5Mode(true);
		// $locationProvider.hashPrefix('!');
	}
]);

appModule.controller('IndexController', ['$route', '$routeParams', '$location',
	function($route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;
	}
]);