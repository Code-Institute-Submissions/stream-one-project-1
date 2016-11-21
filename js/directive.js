angular.module('SebAppDirectives',[])
    .directive('jobs', function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/jobs.html'
        };
    });
    