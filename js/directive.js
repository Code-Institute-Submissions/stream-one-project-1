angular.module('SebAppDirectives', [])
    .directive('contactUs', function () {
        return {
            restrict: "EA",
            templateUrl: "templates/directives/contactus-map.html"
        };
    })
    