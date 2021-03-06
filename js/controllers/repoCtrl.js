'use strict';

angular.module('githubContributors.controller')
.controller('RepoCtrl',
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

    $scope.repoInfo = githubResource.get({
        'query': 'repos',
        'user': $routeParams.user,
        'repo': $routeParams.repo
    });

    $scope.watchForms = watchForms;
    $scope.forkForms = forkForms;


}]);