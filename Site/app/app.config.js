(function() {
    'use strict';
    angular.module('app')
        .config(['$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('help', {
                        url: '/help',
                        templateUrl: 'app/components/LP/help.html'
                    })
                    .state('home', {
                        url: '/',
                        templateUrl: 'app/components/LP/home.html'
                    });
            }]);
})();
