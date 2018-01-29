app.directive('coffeemakerInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/coffeemakerInfo.html'
  }; 
  
});
