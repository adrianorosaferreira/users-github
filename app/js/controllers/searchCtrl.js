'use strict';

angular.module('githubContributors.controller')
.controller('SearchCtrl',
        ['$scope', '$location',   
            function($scope, $location) {

    $scope.user = 'adrianorosaferreira';

    $scope.userSearch = function () {
        $location.path('/github/' + $scope.user + '/');
    };
    
}]);