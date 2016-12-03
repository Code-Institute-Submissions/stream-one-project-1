angular.module('JobsService', [])
    .factory('JobsAPIService', function($http) {
		var getJobs = function() {
    		return $http.get('/js/jobs.json');
		};
		return {
      		getJobs: getJobs
      	};
    });
  