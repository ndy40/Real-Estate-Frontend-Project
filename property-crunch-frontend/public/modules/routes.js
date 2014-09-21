/*global define */
/**
 * Default route for for PCAPP module.
 */
(function (define) {
    'use strict';
    define(["./app"], function (app) {
        return app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl : "modules/home/home.html",
                controller  : "HomeCtrl"
            });
            $routeProvider.when("/search", {
                templateUrl : "modules/search/searchresult.html",
                controller  : "SearchFormCtrl"
            });
            $routeProvider.when("/learn-more", {
                templateUrl : "modules/learn-more/learn-more.html",
                controller  : "LearnMoreCtrl"
            });
            $routeProvider.when("/list-property", {
                templateUrl : "modules/list-property/list-property.html",
                controller  : "ListPropertyCtrl"
            });
            $routeProvider.when("/login", {
                templateUrl : "modules/login/login.html",
                controller  : "LoginCtrl"
            });
            $routeProvider.when("/investor-dashboard", {
                templateUrl : "modules/investor-dashboard/investor-dashboard.html",
                controller  : "InvestorDashboardCtrl"
            });
            $routeProvider.otherwise({
                redirectTo : "/"
            });
            //location configuration
            $locationProvider.html5Mode(true).hashPrefix('!');
        }]);
		
		
		 return app.config(["$locationProvider", function ($locationProvider) {
            $locationProvider.html5Mode(true).hashPrefix('!');
        }]);
		
    });
}(define));
