angular.module('JobsService', [])
    .factory('JobsAPIService', function($http) {

        var getJobs = function() {
    
  		return $http.get('/api/jobs');

		};

      	return {
      		getJobs: getJobs
      	};
    });
  