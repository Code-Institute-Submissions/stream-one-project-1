angular.module('SebAppDirectives',[])
    .directive('jobs', function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/jobs.html'
        };
    })

    .directive('contactusmap', function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/contactus-map.html'
        };
    });


    