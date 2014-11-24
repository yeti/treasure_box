treasureBox.controller("indexController", function($scope, $modal, $http) {

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
//
//	$scope.$on('treasureSaved', function(event, args) {
//		console.log(args);
//	});
});