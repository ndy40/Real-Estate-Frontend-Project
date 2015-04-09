/*global define */
/*jshint -W069 */
/**
 * Default route for for pcApp module.
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
(function (define) {
    'use strict';
    define([
        "app"
    ], function (app) {
        app.config(["$routeProvider", "$locationProvider", "$provide",
            "$httpProvider", function ($routeProvider, $locationProvider,
                $provide, $httpProvider) {
                
            $routeProvider.when("/", {
                redirectTo : "/home"
            });

            $routeProvider.when("/pages/home", {
                redirectTo : "/home"
            });

            $routeProvider.when("/home", {
                title : 'Home - nello',
                templateUrl : "modules/static-pages/views/home.html",
                controller  : "StaticCtrl"
            });

            $routeProvider.when("/search", {
                title : 'Search - nello',
                templateUrl : "modules/search/views/searchresult.html",
                controller  : "SearchFormCtrl"
            });

            $routeProvider.when("/property/:id", {
                title : 'Property Details - nello',
                templateUrl : "modules/property-details/views/property.html",
                controller  : "PropertyCtrl"
            });

            $routeProvider.when("/pages/:pageName", {
                title : 'nello - a smarter way to find properties',
                templateUrl : "modules/static-pages/views/template.html",
                controller  : "StaticCtrl"
            });

            $routeProvider.when("/sign/:type", {
                title : 'Login or Sign Up - nello',
                templateUrl : "modules/login/views/login.html",
                controller  : "LoginCtrl"
            });

            $routeProvider.when("/confirm-account", {
                title : 'Please confirm Email Address - nello',
                templateUrl : "modules/login/views/confirm-account.html",
                controller  : "LoginCtrl"
            });
            
            $routeProvider.when("/register-success", {
                title : 'Registration Successful - nello',
                templateUrl : "modules/login/views/register-success.html",
                controller  : "LoginCtrl"
            });

            $routeProvider.when("/forgot-password", {
                title : 'Forgot Password - nello',
                templateUrl : "modules/login/views/forgot-password.html",
                controller  : "LoginCtrl"
            });

            $routeProvider.when("/forgot-password-2", {
                title : 'Forgot Password Success - nello',
                templateUrl : "modules/login/views/forgot-password-2.html",
                controller  : "LoginCtrl"
            });

            $routeProvider.when("/favourites", {
                title : 'Favourites - nello',
                templateUrl : "modules/favourites/views/favourites.html",
                controller  : "FavouritesCtrl"
            });

            // Used as an iframe on Blog
            $routeProvider.when("/property-calculator", {
                templateUrl : "modules/property-details/views/calculator.html",
                controller  : "PropertyCtrl"
            });

            $routeProvider.otherwise({
                title : 'Oops! Page not found - nello',
                redirectTo : "/pages/404"
            });
            
//          // Creating troubles in minifying
//            $provide.decorator('$sniffer', function ($delegate) {
//                $delegate.history = false;
//                return $delegate;
//            });
//
            $locationProvider.html5Mode(true).hashPrefix('!');
            $httpProvider.defaults.useXDomain = true;
            //default content type
            $httpProvider.defaults.headers.post["Accept"] =
                "application/x-www-form-urlencoded";
        }]);

        // Change Page Titles
        app.run(['$rootScope', '$route', function($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
                if (oldVal !== newVal) {
                    document.title = $route.current.title;
                }
            });
        }]);
    
        // ScrollToTop Fix for Anchor Tags
        // Src: http://codepen.io/jonashartmann/pen/kBqmj
        app.run(["$rootScope", "$location", "$anchorScroll", "$routeParams", 
            function($rootScope, $location, $anchorScroll, $routeParams) {
                $rootScope.$on('$routeChangeSuccess', function() {
                    $location.hash($routeParams.scrollTo);
                    $anchorScroll();
                });
        }]);

        return app;
    });
}(define));
