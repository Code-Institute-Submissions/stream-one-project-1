angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {
    })

    .controller('CalcController', function($scope) {
        $scope.result = function() {
            if ($scope.value <= 300 && $scope.value > 0) {
                return 300; 
            } else {
                return $scope.value * 1.45
    			}
    	  	}
    })
    
    .controller('CareersController', function($scope, JobsAPIService) {
        JobsAPIService.getJobs().then(function(response) {
            jobs = {};
            $scope.jobs = response 
            $scope.jobs.Title = jobs.Title
            $scope.jobs.Description = jobs.Description 
        })
    })

    .controller('ContactUsController', function ($scope) {
        $scope.nameLabel = "Name:";
        $scope.emailLabel = "E-mail:";
        $scope.messageLabel = "Message:";
        $scope.collectFormData;
        $scope.storeFormData = function () {
            $scope.log = console.log($scope.collectFormData);
            $scope.companyName = " ";
            $scope.email = " ";
            $scope.message = " ";
        }
        var latlng = new google.maps.LatLng(51.456425, 0.203897);
        var options = {
            zoom: 5,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            mapTypeControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), options);
        $scope.map = map
        console.log (map)
        var marker1 = new google.maps.Marker({
            position: latlng,
            map: map
        });
        google.maps.event.addListener(marker1, 'click', function () {
            infowindow.open(map, marker1);
        });
    });

    

    