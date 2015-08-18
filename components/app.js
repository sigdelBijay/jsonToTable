'use strict';
var app = angular.module('jsonApp', []);
app.controller('JsonAppController', function($scope) {
	$scope.tableHeaders = [];
	$scope.data = [{
		"firstName": "John",
		"lastName": "Doe",
		"Contact": "4473213213"
	}, {
		"firstName": "Anna",
		"lastName": "Smith",
		"Contact": "4473213213"
	}, {
		"firstName": "Peter",
		"lastName": "Jones",
		"Contact": "4473213213"
	}];

	var elements = $scope.data[0];
	for (var key in elements) {
		$scope.tableHeaders.push(key);
	}
	// alert($scope.table_headers);
	// $scope.data.forEach(function(index) {
	// 	$scope.stretch.push(index);
	// });
	// alert(JSON.stringify($scope.stretch));
		// for(var i=0; i<data.length; i++){
		// 	for(var key in data[0]) {
		// 		$scope.key=key;
		// 		alert($scope.key);
		// 	}
		// 	if($scope.key=key){
		// 		break;
		// 		// $scope.value=key
		// 	}
		// }
		// for(var i=0; i<data.length; i++){
		// 	for(var key in data[i]){
		// 		$scope.value=JSON.stringify(data[key]);
		// 		alert($scope.value);
		// 	}
		// }
});