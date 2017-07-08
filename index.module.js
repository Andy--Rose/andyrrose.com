var appModule = angular.module('andyrrose.com', [
	'ngRoute', 
	'navigation', 
	'home', 
	'about', 
	'info', 
	'work', 
	'projects', 
	'papers',
	'lights'
]);

// Routing for the different pages
// All pages go through the index, but the page is displayed differently by the URL
// 
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
			.when('/projects', {
				template: "<projects></projects>"
			})
			.when('/papers', {
				template: "<papers></papers>"
			})
			.when('/lights', {
				template: "<lights></lights>"
			})
			.otherwise('/');		// Routes other paths to home. TODO: Create error page
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