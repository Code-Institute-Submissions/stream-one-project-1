angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {

    	
    })

    .controller('CalcController', function($scope) {

    	$scope.result = function() {

    		if ($scope.value <= 300 && $scope.value > 0) {

    				return 300; 

    			}

    			else {

    				return $scope.value * 1.45
    			}
    	  	}
    })
    
    .controller('CareersController', function($scope) {
        
    })

    .controller('ContactUsController', function($scope) {
        
    })

    .controller('MapController', function($scope) {
  $scope.title = "Find Us";
  $scope.maps = {
    address: 'The Parklands , Dunstable',
    zoom: 14,
    width: 400
  };

  $scope.map = $scope.maps;
});

    

    