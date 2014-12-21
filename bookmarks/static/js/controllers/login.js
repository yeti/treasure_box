function loginController($scope, $http, AuthService) {
    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
        var authdata = btoa($scope.username + ':' + $scope.password);
        $http.get("api/v1/login/", {headers: {"Authorization": "Basic " + authdata}}).
            success(function(data, status, headers, config) {
                AuthService.oAuth(data.results[0].client_id,
                    data.results[0].client_secret,
                    $scope.username,
                    $scope.password);
            });
    };
}