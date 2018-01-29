var app = angular.module('DemoCoffeemakerMarketApp', [
	'ngRoute',
	'ngAnimate'
]);

/*
// Cache our directive templates.
// This is to allow users to modify coffeemakerInfo.html and see the results immediately.
app.run(function($http, $templateCache) {
	$http.get('/coffee/js/directives/coffeemakerInfo.html', { cache: $templateCache });
	$http.get('/coffee/js/directives/coffeemakerBuy.html', { cache: $templateCache });
});
*/

app.config(function ($routeProvider) { 
	$routeProvider 
	.when('/', { 
		controller: 'MainController', 
		templateUrl: 'views/home.html' 
	}) 
	.when('/coffeemaker/:id', {
		controller: 'CoffeemakerController',
		templateUrl: 'views/coffeemaker.html'
	})
	.when('/newcoffeemaker', {
		controller: 'CoffeemakerNewController',
		templateUrl: 'views/coffeemakeredit.html'
	})
	.when('/coffeemakeredit/:id', {
		controller: 'CoffeemakerEditController',
		templateUrl: 'views/coffeemakeredit.html'
	})
	.otherwise({ 
		redirectTo: '/' 
	});
});
