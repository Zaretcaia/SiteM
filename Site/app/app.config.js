(function() {
    'use strict';
    angular.module('app')
        .config(['$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('faq', {
                        url: '/faq',
                        templateUrl: 'app/components/LP/help.html'
                    })
                    .state('homeLP', {
                        url: '/',
                        templateUrl: 'app/components/LP/home.html'
                    })
                    .state('mainLK', {
                        url: '/lk/main',
                        templateUrl: 'app/components/LK/main.html',
                        controller: 'LKCtrl'
                    })
                    .state('operationsLK', {
                        url: '/lk/operations',
                        templateUrl: 'app/components/LK/operations.html'
                    });
            }]);
})();
