'use strict';

angular.module('githubContributors.controller')
.controller('RepoListCtrl',
        ['$scope', '$routeParams', 'githubResource', 
            function($scope, $routeParams, githubResource) {

    var watchForms = {
        '1': 'Watcher',
        'other': 'Watchers'
    },
    forkForms = {
        '1': 'Fork',
        'other': 'Forks'
    };

    $scope.repos = githubResource.get({user: $routeParams.user});
    $scope.user = $routeParams.user;

    $scope.watchForms = watchForms;
    $scope.forkForms = forkForms;

}]);