treasureBox.controller("indexController", function($scope, $modal) {

	var categories = ["Work", "Not Work"];

	var treasures = [
		{
			title: "Yeti Home",
			url: "www.yetihq.com",
			description: "Where I work",
			category: "Work"
		},
		{
			title: "Google",
			url: "www.google.com",
			description: "Not related to goggles",
			category: "Not Work"
		},
		{
			title: "YouTube",
			url: "www.youtube.com",
			description: "Lots of cat videos",
			category: "Not Work"
		}
	];

	$scope.treasures = treasures;
	$scope.categories = categories;

	$scope.newTreasure = function(category) {
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
				console.log('creating a new category')
				$scope.categories.push(newTreasure.categorySelection);
				$scope.treasures.push(newTreasure);				
			}
		});
	};

	$scope.$on('treasureSaved', function(event, args) {
		console.log(args);
	});
});

treasureBox.controller('modalInstanceController', function($scope, $modalInstance, $rootScope, category, categories) {
	$scope.category = category;
	$scope.categories = categories;

	$scope.saveTreasure = function() {
		// $rootScope.$broadcast('treasureSaved', $scope.newTreasure);
		// $
		$modalInstance.close($scope.newTreasure);
	};
});