(function() {
    "use strict";
    angular.module("app")
        .config([
            "$urlRouterProvider", "$stateProvider",
            function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise("/");
                $stateProvider
                    .state("faqLP", {
                        url: "/faq",
                        templateUrl: "app/components/LP/help.html"
                    })
                    .state("agreementLP", {
                        url: "/agreement",
                        templateUrl: "app/components/LP/agreement.html"
                    })
                    .state("marketingLP", {
                        url: "/marketing",
                        templateUrl: "app/components/LP/marketing.html"
                    })
                    .state("homeLP", {
                        url: "/",
                        templateUrl: "app/components/LP/home.html"
                    })
                    .state("mainLK", {
                        url: "/lk/main",
                        templateUrl: "app/components/LK/main.html"
                    })
                    .state("operationsLK", {
                        url: "/lk/operations",
                        templateUrl: "app/components/LK/operations.html"
                    })
                    .state("contactsLP", {
                        url: "/contacts",
                        templateUrl: "app/components/LP/contacts.html"
                    })
                    .state("partnersLK", {
                        url: "/lk/partners",
                        templateUrl: "app/components/LK/partners.html"
                    })
                    .state("tiketiLK", {
                        url: "/lk/tiketi",
                        templateUrl: "app/components/LK/tiketi.html"
                    })
                    .state("reviewsLP", {
                        url: "/reviews",
                        templateUrl: "app/components/LP/reviews.html"
                    })
                    .state("newsLP", {
                        url: "/news",
                        templateUrl: "app/components/LP/news.html"
                    })
                    .state("optionsLK", {
                        url: "/lk/options",
                        templateUrl: "app/components/LK/options.html"
                    })
                    .state("banersLK", {
                        url: "/lk/baners",
                        templateUrl: "app/components/LK/baners.html"
                    });
            }
        ]);
})();