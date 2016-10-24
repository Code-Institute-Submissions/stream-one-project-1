angular.module('SebApp', ['ngRoute', 'RouteControllers']);
 
angular.module('SebApp').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/aboutus.html'
        
        
    })
    .when('/services', {
        templateUrl: 'templates/services.html'
        
      
    })

    .when('/careers', {
        templateUrl: 'templates/careers.html'
       
        
    })

    .when('/contactus', {
        templateUrl: 'templates/contactus.html'
        
        
    });
    

    
});