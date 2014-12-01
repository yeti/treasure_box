treasureBox.controller("indexController", function($scope, $rootScope, $http) {
    $http.get('api/v1/categories/').success(function(categoryData) {
        $rootScope.categories = categoryData.results;
    }).error(function(error) {
        console.log(error);
    });

    $http.get('api/v1/bookmarks/').success(function(bookmarkData) {
        $rootScope.treasures = bookmarkData.results;
    }).error(function(error) {
        console.log(error);
    });
});