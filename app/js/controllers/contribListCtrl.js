'use strict';

angular.module('githubContributors.controller')
.controller('ContribListCtrl',
        ['$scope', '$routeParams', '$githubResource',   
            function($scope, $routeParams, $githubResource) {

	function ContribListCtrl($scope, $routeParams, githubResource) {
	    
	    $scope.contributors = githubResource.get({
	        'query': 'repos',
	        'user': $routeParams.user,
	        'repo': $routeParams.repo,
	        'spec': 'contributors'
	    });
	}
	ContribListCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];

}]);