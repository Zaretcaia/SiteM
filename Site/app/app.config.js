(function() {
    'use strict';
    angular.module('app')
        .config(['$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'app/components/Login/login.html'
                    })
                    .state('help', {
                        url: '/help',
                        templateUrl: 'app/components/Help/help.html'
                    })
                    .state('home', {
                        url: '/',
                        templateUrl: 'app/components/Home/home.html'
                    });
            }]);
})();
