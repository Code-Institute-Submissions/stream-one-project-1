angular.module('SebApp', ['ngRoute', 'RouteControllers' ]);
 
angular.module('SebApp').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/aboutus.html',
        controller: 'HomeController'
        
        
    })

    .when('/careers', {
        templateUrl: 'templates/careers.html',
        controller: 'CareersController'
       
        
    })

    .when('/contactus', {
        templateUrl: 'templates/contactus.html',
        controller: 'MapController'
        
        
    });
    

    
});