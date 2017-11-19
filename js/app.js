angular.module('SebApp', ['ngRoute', 'RouteControllers', 'SebAppDirectives', 'JobsService']);
    angular.module('SebApp').config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'templates/aboutus.html',
        controller: 'HomeController'
    })
    .when('/services', {
        templateUrl: 'templates/services.html'
    })
    .when('/careers', {
        templateUrl: 'templates/careers.html',
        controller: 'CareersController'
    })
    .when('/contactus', {
        templateUrl: 'templates/contactus.html',
        controller: 'ContactUsController'
    });
});