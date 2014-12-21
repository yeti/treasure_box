function signupController($scope, $http, AuthService) {
    $scope.username = "";
    $scope.email = "";
    $scope.password = "";
    $scope.confirmPassword = "";

    $scope.signup = function() {
        if($scope.password != $scope.confirmPassword) {
            alert("Passwords don't match!");
        } else if ($scope.password == "" || $scope.email == "" || $scope.username == "") {
            alert("Please fill out all of the fields");
        } else {
            var userObject = {
                username: $scope.username,
                email: $scope.email,
                password: btoa($scope.password)
            };
            $http.post("api/v1/sign_up/", userObject).
                success(function(data, status, headers, config) {
                    AuthService.oAuth(data.client_id,
                        data.client_secret,
                        $scope.username,
                        $scope.password);
                });
        }
    };
}