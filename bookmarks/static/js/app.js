var treasureBox = angular.module("treasureBox", ['ui.bootstrap', 'ngRoute']);

treasureBox.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/search", {
			templateUrl: "/static/views/search.html",
			controller: 'searchController',
			title: 'Search'
		})
		.otherwise({
			templateUrl: "/static/views/dashboard.html",
			controller: 'indexController',
			title: 'Dashboard'	
		});
}])