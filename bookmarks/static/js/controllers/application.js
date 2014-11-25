treasureBox.controller("applicationController", function($scope, $http, $modal, $location) {
    $http.get('api/v1/categories').success(function(categoryData) {
        $scope.categories = categoryData.results;
    }).error(function(error) {
        console.log(error);
    });

    $http.get('api/v1/bookmarks').success(function(bookmarkData) {
        $scope.treasures = bookmarkData.results;
    }).error(function(error) {
        console.log(error);
    });

	$scope.newTreasure = function() {
		var addTreasure = $modal.open({
			templateUrl: 'addTreasure.html',
			controller: 'addTreasureController',
			resolve: {
				categories: function() {
					return $scope.categories;
				}
			}
		});

		addTreasure.result.then(function(newTreasure) {
			if (_.find($scope.categories, {name: newTreasure.categorySelection})) {
				$scope.treasures.push(newTreasure);
			}
			else {
				$scope.categories.push({name: newTreasure.categorySelection});
				$scope.treasures.push(newTreasure);
			}
		});
	};

    $scope.newSearch = function() {
        var newSearch = $modal.open({
            templateUrl: 'search.html',
            controller: 'searchModalController'
        });

        newSearch.result.then(function(searchTerm) {
             $location.path('/search');
             $scope.filterSearchBy = searchTerm;
        });
    };
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

        $http.post('api/v1/bookmarks/', data).success(function(bookmarkCollection) {
            $modalInstance.close($scope.newTreasure);
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