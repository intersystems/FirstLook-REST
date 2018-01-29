app.controller('CoffeemakerEditController', ['$scope', 'restapi', '$routeParams', '$http', function($scope, restapi, $routeParams, $http) {
	var coffeemakerID = $routeParams.id;
	
	$scope.legendString = 'Editing coffeemaker #'+coffeemakerID;
	
	//Angular Exercise #4: Get data from server for the specified coffeemakerID
	//get coffeemakers (GET)
	restapi.getCoffeemaker(coffeemakerID).success(function(data) { 
		$scope.coffeemakeredit = data;
	}) 
	.error(function(err) {
		alert('Error loading data for coffeemaker ID #'+coffeemakerID);
	});
	
	//Angular Exercise #4: Post form data to server. Display alert box indicating success or failure. If successful, redirect to index.html.
  	//coffeemaker update/save (POST)
	$scope.saveCoffeemaker = function() {
		restapi.saveCoffeemaker($scope.coffeemakeredit.coffeemakerID,$scope.coffeemakeredit).success(function(result) {
			alert('Success!');
			window.location.href='index.html';
		})
		.error(function(err) {
			alert('Error: '+err.errormessage);
		}); 
	}
  
    //Angular Exercise #5: delete data from server for specified coffeemakerID
	//coffeemaker delete (DELETE)
  	$scope.deleteCoffeemaker = function() {
	  	restapi.deleteCoffeemaker($scope.coffeemakeredit.coffeemakerID).success(function(result) {
			console.log('CoffeemakerEditController DELETE coffeemakeredit success result=' + JSON.stringify(result));
			alert('Success!');
			window.location.href='index.html';
		})
		.error(function(err) { 
			console.log('CoffeemakerEditController DELETE coffeemakeredit error err=' + err);
			return err;
		});
  	}
  	
}]);
