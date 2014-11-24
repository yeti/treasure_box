treasureBox.controller("applicationController", function($scope, $http, $modal) {
    $http.get('api/v1/categories').success(function(categoryData) {
        $scope.categories = categoryData.results;
    }).error(function(error) {
        console.log(error);
    });

    $http.get('api/v1/bookmarks').success(function(bookmarkData) {
        $scope.treasures = bookmarkData.results;
        console.log($scope.treasures);
    }).error(function(error) {
        console.log(error);
    });

	$scope.newTreasure = function(category) {
        console.log('new treasure');
//        var data = {
//            category_name: "Social",
//            description: "Birthday reminders",
//            title: "Facebook",
//            url: "https://www.facebook.com/"
//        };
//
//        $http.post('api/v1/bookmarks/', data).success(function(data) {
//            console.log(data);
//        }).error(function(data) {
//            console.log(data);
//        });

		var modalInstance = $modal.open({
			templateUrl: 'addTreasure.html',
			controller: 'modalInstanceController',
			resolve: {
				category: function() {
					return category;
				},
				categories: function() {
					return $scope.categories;
				}
			}
		});

		modalInstance.result.then(function(newTreasure) {
			console.log(newTreasure);
			if (_.contains($scope.categories, newTreasure.categorySelection)) {
				console.log('found the category');
				$scope.treasures.push(newTreasure);
			}
			else {
				console.log('creating a new category');
				$scope.categories.push(newTreasure.categorySelection);
				$scope.treasures.push(newTreasure);
			}
		});
	};
});

treasureBox.controller('modalInstanceController', function($scope, $http, $modalInstance, $rootScope, category, categories) {
	$scope.category = category;
	$scope.categories = categories;

	$scope.saveTreasure = function() {
        var data = {
            category_name: $scope.newTreasure.categorySelection,
            description: $scope.newTreasure.description,
            title: $scope.newTreasure.title,
            url: $scope.newTreasure.url
        };

        $http.post('api/v1/bookmarks/', data).success(function(response) {
            console.log(response);
//            $modalInstance.close($scope.newTreasure);
        }).error(function(data) {
            console.log(data);
        });


	};
});