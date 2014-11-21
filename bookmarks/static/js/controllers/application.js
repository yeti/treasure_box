treasureBox.controller("navController", function($scope, $modal) {
//    var categories = ["Work", "Not Work"];
//    $scope.categories = categories;
//
//
//	$scope.newTreasure = function(category) {
//		var modalInstance = $modal.open({
//			templateUrl: 'addTreasure.html',
//			controller: 'modalInstanceController',
//			resolve: {
//				category: function() {
//					return category;
//				},
//				categories: function() {
//					return $scope.categories;
//				}
//			}
//		});
//
//		modalInstance.result.then(function(newTreasure) {
//			console.log(newTreasure);
//			if (_.contains($scope.categories, newTreasure.categorySelection)) {
//				console.log('found the category');
//				$scope.treasures.push(newTreasure);
//			}
//			else {
//				console.log('creating a new category');
//				$scope.categories.push(newTreasure.categorySelection);
//				$scope.treasures.push(newTreasure);
//			}
//		});
//	};
});

//treasureBox.controller('modalInstanceController', function($scope, $modalInstance, $rootScope, category, categories) {
//	$scope.category = category;
//	$scope.categories = categories;
//
//	$scope.saveTreasure = function() {
//		// $rootScope.$broadcast('treasureSaved', $scope.newTreasure);
//		// $
//		$modalInstance.close($scope.newTreasure);
//	};
//});