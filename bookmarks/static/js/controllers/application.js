treasureBox.controller("applicationController", function($scope, $rootScope, $http, $modal, $location, $cookieStore) {
	$scope.newTreasure = function() {
		var addTreasure = $modal.open({
			templateUrl: 'addTreasure.html',
			controller: 'addTreasureController',
            backdropClass: 'modalBackdrop',
			resolve: {
				categories: function() {
					return $rootScope.categories;
				}
			}
		});

		addTreasure.result.then(function(newTreasure) {
			if (_.find($rootScope.categories, {name: newTreasure.category.name})) {
				$rootScope.treasures.unshift(newTreasure);
			}
			else {
				$rootScope.categories.push({name: newTreasure.category.name});
				$rootScope.treasures.unshift(newTreasure);
			}
		});
	};

    $scope.newSearch = function() {
        var newSearch = $modal.open({
            templateUrl: 'search.html',
            controller: 'searchModalController',
            backdropClass: 'modalBackdrop'
        });

        newSearch.result.then(function(searchTerm) {
             $location.path('/search');
             $scope.filterSearchBy = searchTerm;
        });
    };

    $scope.logout = function() {
        $rootScope.authToken = null;
        $cookieStore.put("userCookie", null);
        $http.defaults.headers.common['Authorization'] = null;
        $location.path("/login");
    }
});

treasureBox.controller('addTreasureController', function($scope, $http, $modalInstance, $rootScope, categories) {
	$scope.categories = categories;

	$scope.saveTreasure = function() {
        var data = {
            category_name: $scope.newTreasure.categorySelection,
            description: $scope.newTreasure.description,
            title: $scope.newTreasure.title,
            url: $scope.newTreasure.url
        };

        $http.post('api/v1/bookmarks/', data).success(function(treasureResult) {
            $modalInstance.close(treasureResult);
        }).error(function(errorResponse) {
            console.log(errorResponse);
        });
	};
});

treasureBox.controller('searchModalController', function($scope, $modalInstance) {
    $scope.findTreasure = function() {
        $modalInstance.close($scope.searchTerm);
    };
});