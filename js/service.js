angular.module('JobsService', [])
    .factory('JobsAPIService', function($http) {
		var getJobs = function() {
    	return $http.get('/jobs.js');
		};
		return {
      		getJobs: getJobs
      	};
    });
  