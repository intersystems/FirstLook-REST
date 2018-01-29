app.directive('coffemakerBuy', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'js/directives/coffeemakerBuy.html',
    link: function(scope, element, attrs) { 
  scope.buttonText = "Buy", 
  scope.bought = false, 

  scope.buy = function() { 
    element.toggleClass('btn-active'); 
    if(scope.bought) { 
      scope.buttonText = "Buy"; 
      scope.bought = false; 
    } else { 
      scope.buttonText = "Sold"; 
      scope.bought = true; 
    } 
  } 
}
  };
  
}
);