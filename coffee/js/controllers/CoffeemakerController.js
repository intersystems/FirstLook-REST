app.controller('CoffeemakerController', ['$scope', 'restapi', '$routeParams', function($scope, restapi, $routeParams) {
	$scope.specs = ['color','numcups'];
	
	restapi.getCoffeemaker($routeParams.id).success(function(data) {
		$scope.detail = data;
	});
}]);
