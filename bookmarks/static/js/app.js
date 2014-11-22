var treasureBox = angular.module("treasureBox", ['ngRoute', 'ngCookies', 'restangular', 'ui.bootstrap']);

treasureBox.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/views/dashboard.html',
            controller: 'indexController',
            title: 'Dashboard'
        }).
        when('/search', {
            templateUrl: '/static/views/search.html',
            controller: 'searchController',
            title: 'Search'
        }).
        when('/login', {
            templateUrl: '/static/views/login.html',
            controller: loginController,
            title: 'Login'
        }).
        otherwise({redirectTo: '/'});
}]);

treasureBox.run(function run($rootScope, $cookieStore, Restangular) {
    var authToken = $cookieStore.get('userCookie');
    if (authToken) {
        $rootScope.authToken = authToken;
        Restangular.setDefaultHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        });
    }
});




