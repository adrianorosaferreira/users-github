'use strict';

angular.module('githubContributors.controller')
.controller('SearchCtrl',
        ['$scope', '$routeParams', '$location',   
            function($scope, $routeParams, $location) {

    function SearchCtrl($scope, $location) {

        $scope.user = 'angular';

        $scope.userSearch = function () {
            $location.path(['', 'github', $scope.user, ''].join('/'));
        };
    }
    SearchCtrl.$inject = ['$scope', '$location'];
    
}]);