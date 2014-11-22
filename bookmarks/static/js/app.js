var treasureBox = angular.module("treasureBox", ['ngCookies', 'restangular', 'ui.bootstrap']);

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