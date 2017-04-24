'use strict';angular.module('githubContributors.core', []);angular.module('githubContributors.services', []);angular.module('githubContributors.controller', []);var app = angular.module('githubContributors', ['githubContributors.core',    'githubContributors.services',     'githubContributors.controller']);app.config(['$routeProvider', function ($routeProvider) {        $routeProvider.when('/', {            templateUrl: 'partials/search.html',            controller: 'SearchCtrl'        });        $routeProvider.when('/github/:user/', {            templateUrl: 'partials/user-page.html'        });        $routeProvider.when('/github/:user/:repo/', {            templateUrl: 'partials/repo-page.html'        });        $routeProvider.otherwise({            redirectTo: '/'        });    }]);app.run(function($rootScope, $route, $http, $routeParams, $templateCache){	});