'use strict';
app.controller('home', function($scope) {
	$scope.formFormat = {

	};
	$scope.formData = {};

	$scope.onSubmit = function onSubmit() {
		$scope.submittedData = $scope.formData;
	};
});