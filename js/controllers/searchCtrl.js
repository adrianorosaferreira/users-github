'use strict';

angular.module('githubContributors.controller')
.controller('SearchCtrl',
        ['$scope', '$location', '$http',  
            function($scope, $location, $http) {

    $scope.user = 'adrianorosaferreira';

    $scope.userSearch = function () {
        $location.path('/github/' + $scope.user + '/'); 
    };
    
}]);