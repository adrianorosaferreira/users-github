'use strict';

angular.module('githubContributors.controller')
.controller('UserCtrl',
        ['$scope', '$routeParams', '$githubResource',   
            function($scope, $routeParams, $githubResource) {


    function UserCtrl($scope, $routeParams, githubResource) {

        $scope.user_info = githubResource.get({user: $routeParams.user, repo: ''});

        $scope.publicRepoForms = {
            '1': 'Public repo',
            'other': 'Public repos'
        };
        $scope.followerForms = {
            '1': 'Follower',
            'other': 'Followers'
        };
    }
    UserCtrl.$inject = ['$scope', '$routeParams', 'githubResource'];

}]);