angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {

    	
    })

    .controller('CalcController', function($scope) {

    	$scope.result = function() {

    		if ($scope.value < 300) {

    		return $scope.value * 1.45

    		}

    		else {

    			return $scope.value * 1.45 / 1.10;

    		}
    	}
    })



    .controller('ServicesSebController', function($scope) {
        
    })

    .controller('CareersController', function($scope) {
        
    })

    .controller('ContactUsController', function($scope) {
        
    });