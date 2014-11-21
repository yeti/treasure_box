treasureBox.directive('treasure', function() {
	return {
		restrict: 'E',
		templateUrl: '/static/js/directives/templates/treasure.html',
//		template: "<a href='http://{{ treasureSite.url }}' /><div class='col-md-3 treasureItem'><div>Title: {{ treasureSite.title }}</div><div>Description: {{ treasureSite.description }}</div></div></a>"
	}
});