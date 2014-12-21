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
            title: 'Search'
        }).
        when('/login', {
            templateUrl: '/static/views/login.html',
            controller: loginController,
            title: 'Login'
        }).
        when('/signup', {
            templateUrl: '/static/views/signup.html',
            controller: signupController,
            title: 'Signup'
        }).
        otherwise({redirectTo: '/'});
}]);

treasureBox.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

treasureBox.run(function($rootScope, $location, $cookieStore, Restangular, $http) {
    $rootScope.setAuthToken = function(authToken) {
        $rootScope.authToken = authToken;
        $http.defaults.headers.common['Content-Type'] = 'application/json';
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
    };

    // register listener to watch route changes
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        if ($rootScope.authToken == null) {
            var authToken = $cookieStore.get('userCookie');
            if (authToken) {
                $rootScope.setAuthToken(authToken)
            } else if (next.indexOf('/#/login') < 0 && next.indexOf("/#/signup") < 0) {
                // not going to login or signup, we should redirect!
                $location.path("/login");
            }
        }
    });
 });