app.controller('CoffeemakerNewController', ['$scope', 'restapi', '$http', function($scope, restapi, $http) {

	$scope.legendString = 'New coffeemaker';

	$scope.saveCoffeemaker = function() {
		restapi.createCoffeemaker($scope.coffeemakeredit).success(function(result) {
			alert('Success!');
			window.location.href='index.html';
		})
		.error(function(err) {
			alert('Error: '+err.errormessage);
		}); 
	}

	$scope.deleteCoffeemaker = angular.noop;
	
	$scope.newCoffeemaker = function () {
    	$scope.coffeemakeredit = {};
  	}

}]);
