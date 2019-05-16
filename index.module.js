var appModule = angular.module('andyrrose.com', [
	'ngRoute',
	'ngMaterial', 
	'ngMessages',
	'ngAria',

	'navigation', 
	'home', 
	'about', 
	'info', 
	'work',
	'projects',
	'papers'
]);

// Routing for the different pages
// All pages go through the index, but the page is displayed differently by the URL

appModule.config(
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
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
			.otherwise('/');		// Routes other paths to home. TODO: Create error page
	}
);

appModule.controller('IndexController', ['$route', '$routeParams', '$location',
	function($route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;
	}
]);