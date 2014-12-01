treasureBox.directive('treasure', function() {
	return {
		restrict: 'E',
		templateUrl: '/static/js/directives/templates/treasure.html',
        link: function (scope, element, attrs){
            scope.treasureImage = function(treasureSite) {
                if (treasureSite.screenshot) {
                    return "static/media/" + treasureSite.screenshot
                } else {
                    return "static/img/3.png"
                }
            }
        }
	}
});