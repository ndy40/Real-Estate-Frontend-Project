/*global define */
/**
 * pcApp Default Config
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
(function (define) {
    'use strict';
    define(["app"], function (app) {
        /**
        * HTML Pre-Load caching for Views used in the pcApp.
        */
        app.run(["$templateCache", "$http", function ($templateCache, $http) {
            // Shared
//            $http.get('modules/shared/directives/loader.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/shared/directives/rec-properties.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/shared/views/footer.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/shared/views/navigation-partial.html', {
//                cache: $templateCache 
//            });
            // Static Pages
//            $http.get('modules/static-pages/views/template.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/home.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/404.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/browser-update.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/feedback.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/home.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/learn_more.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/list_property.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/privacy_policy.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/views/terms_of_use.html', {
//                cache: $templateCache 
//            })
//            $http.get('modules/static-pages/directives/cookie-policy.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/directives/testimonial-carousel.html', {
//                cache: $templateCache 
//            });
//            $http.get('modules/static-pages/directives/youtube.html', {
//                cache: $templateCache 
//            });
            // Favourites
            $http.get('modules/favourites/views/favourites.html', {
                cache: $templateCache 
            });
            // Login
            $http.get('modules/login/views/login.html', {
                cache: $templateCache 
            });
            $http.get('modules/login/views/forgot-password.html', {
                cache: $templateCache 
            });
            $http.get('modules/login/views/forgot-password-2.html', {
                cache: $templateCache 
            });
            $http.get('modules/login/views/confirm-account.html', {
                cache: $templateCache 
            });
            $http.get('modules/login/views/register-success.html', {
                cache: $templateCache 
            });
            // Property Details
            $http.get('modules/property-details/views/property.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/views/calculator.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/directives/carousel.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/directives/comparables.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/directives/price-compare.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/directives/price-history.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/directives/to-let-calculator.html', {
                cache: $templateCache 
            });
            $http.get('modules/property-details/directives/to-sell-calculator.html', {
                cache: $templateCache 
            });
            // Search
            $http.get('modules/search/views/searchresult.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/keyword-filters.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/pager.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/keyword-filters.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/refine-filters.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/result-options.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/searchbox.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/selectbox.html', {
                cache: $templateCache 
            });
            $http.get('modules/search/directives/spinner.html', {
                cache: $templateCache 
            });
        }]);

        /**
        * Change Page Titles on Route Change
        */
        app.run(['$rootScope', '$route', function($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
                if (oldVal !== newVal) {
                    document.title = $route.current.title;
                }
            });
        }]);

        /**
        * ScrollToTop Fix for Anchor Tags
        * 
        * @src: http://codepen.io/jonashartmann/pen/kBqmj
        */
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
