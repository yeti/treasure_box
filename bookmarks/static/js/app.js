var treasureBox = angular.module("treasureBox", ['ui.bootstrap', 'ngRoute']);

treasureBox.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "/static/views/dashboard.html",
			controller: 'dashboardController',
			title: 'Dashboard'	
		});
}])