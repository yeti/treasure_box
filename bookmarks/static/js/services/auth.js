treasureBox.service('AuthService', function($http, $cookieStore, $location, $rootScope) {
    this.oAuth = function(clientId, clientSecret, username, password) {
        $http({
            method: "POST",
            url: "api/v1/o/token/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            // Modify the `transformRequest` to url-encode the data (instead of passing in the request body)
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: "password",
                username: username,
                password: password
            }
        }).success(function(data, status, headers, config) {
            $cookieStore.put("userCookie", data.access_token);
            $rootScope.setAuthToken(data.access_token);
            $location.path("/");
        }).error(function(data, status, headers, config) {
            console.log(data);
        });
    }
});