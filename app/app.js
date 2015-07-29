var app = angular.module('myApp', []);
	

app.directive('makeEditable', function() {
		return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'editable.html',
			scope: true,
		}
	});