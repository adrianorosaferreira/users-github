'use strict';

angular.module('githubContributors.services', ['ngResource'])
    .factory('githubResource', function ($resource) {

        return $resource('https://api.github.com/:query/:user/:repo/:spec', {
            'query': 'users',
            'user': 'angular',
            'repo': 'repos',
            'spec': '',
            'callback': 'JSON_CALLBACK',
            'per_page': 100
        }, {
            'get': {
                'method': 'JSONP'
            }
        });
    });
