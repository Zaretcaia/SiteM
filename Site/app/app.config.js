(function() {
    'use strict';
    angular.module('app')
        .config(['$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'app/components/LP/login.html'
                    })
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
