/*global define */
/**
 * Default route for for PCAPP module.
 */
(function (define) {
    'use strict';
    define(["./app"], function (app) {
        return app.config(["$routeProvider", "$locationProvider", "$provide", function ($routeProvider, $locationProvider, $provide) {
            $routeProvider.when("/home", {
                templateUrl : "modules/home/home.html",
                controller  : "HomeCtrl"
            });
            
            $routeProvider.when("/search", {
                templateUrl : "modules/search/searchresult.html",
                controller  : "SearchFormCtrl"
            });

            $routeProvider.when("/property/:id", {
                templateUrl : "modules/property-details/property.html",
                controller  : "PropertyCtrl"
            });
            
            $routeProvider.when("/static/:pageName", {
                templateUrl : "modules/static-pages/static.html",
                controller  : "StaticCtrl"
            });

            $routeProvider.when("/login", {
                templateUrl : "modules/login/login.html",
                controller  : "LoginCtrl"
            });
            
            // $routeProvider.when("/investor-dashboard", {
            //     templateUrl : "modules/investor-dashboard/investor-dashboard.html",
            //     controller  : "InvestorDashboardCtrl"
            // });

            $routeProvider.otherwise({
                redirectTo : "/home"
            });

            $provide.decorator('$sniffer', function($delegate) {
              $delegate.history = false;
              return $delegate;
            });

            $locationProvider.html5Mode(true).hashPrefix('!');

            
        }]);
    });
}(define));
