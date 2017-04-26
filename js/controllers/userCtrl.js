'use strict';

angular.module('githubContributors.controller')
.controller('UserCtrl',
        ['$scope', '$routeParams', 'githubResource',  
            function($scope, $routeParams, githubResource) {

    $scope.user_info = githubResource.get({user: $routeParams.user, repo: ''});

    if (localStorage.getItem($routeParams.user)){
        $scope.note = localStorage.getItem($routeParams.user);
    }

    $scope.publicRepoForms = {
        '1': 'Public repo',
        'other': 'Public repos'
    };
    $scope.followerForms = {
        '1': 'Follower',
        'other': 'Followers'
    };

    $scope.makeNote = function(){
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem($routeParams.user, $scope.note);
            $('#note').collapse('hide');
            alert ("Sucesso!\n\nObservação cadastrada com sucesso!");

            // Retrieve
            // document.getElementById("result").innerHTML = localStorage.getItem("lastname")+"aa";
        } else {
            document.getElementById("result").innerHTML = "Desculpe,seu navegador não suporta armazenamento local.";
        }
    }

}]);