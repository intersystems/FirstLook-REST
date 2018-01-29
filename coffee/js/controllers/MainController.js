app.controller('MainController', ['$scope', 'restapi', function($scope, restapi){
	/*
	$scope.coffeemakerlist = [
		{
			img: 'img/test-greenphone.png',
			name: 'French Press', 
			brand: 'Green Phone', 
			price: 123.45 
		}, 
		{ 
			img: 'img/test-redphone.png',
			name: 'Portable single-cup',
			brand: 'Red Phone', 
			price: 234.56
		}, 
		{ 
			img: 'img/test-bluephone.png',
			name: 'Cappachino Maker',
			brand: 'Blue Phone', 
			price: 345.67
		}
	];
	*/
 
	// Uncomment this code for Angular Exercise #2
	
	restapi.getAllCoffeemakers().success(function(data) {
		$scope.coffeemakerlist = data;
	});
	
	
}]);