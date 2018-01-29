app.factory('restapi', ['$http', function($http) {
	var webapp = 'rest/coffeemakerapp';
//location.pathname.split('/')[1];  //coffeemakerapp
	return {
		getAllCoffeemakers: function() {
		return $http.get('/'+webapp+'/coffeemakers');
		},
		getCoffeemaker: function(id) {
			return $http.get('/'+webapp+'/coffeemaker/'+id);
		},
		createCoffeemaker: function(data) {
			return $http.post('/'+webapp+'/newcoffeemaker',data);
		},
		saveCoffeemaker: function(id,data) {
			return $http.put('/'+webapp+'/coffeemaker/'+id,data);
		},
		deleteCoffeemaker: function(id) {
			return $http.delete('/'+webapp+'/coffeemaker/'+id);
		}
	}
}]);