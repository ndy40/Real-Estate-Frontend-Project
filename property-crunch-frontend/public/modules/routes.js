/*global define, $ */
/**
 * Default route for for pcApp module.
 */
(function (define) {
    'use strict';
    define(["./app"], function (app) {
        app.config(["$routeProvider", "$locationProvider", "$provide", "$httpProvider",
            function ($routeProvider, $locationProvider, $provide, $httpProvider) {
                
                $routeProvider.when("/", {
                    redirectTo : "/home"
                });
                
                $routeProvider.when("/pages/home", {
                    redirectTo : "/home"
                });
                
                $routeProvider.when("/home", {
                    templateUrl : "modules/static-pages/views/home.html",
                    controller  : "StaticCtrl"
                });
                
                $routeProvider.when("/search", {
                    templateUrl : "modules/search/views/searchresult.html",
                    controller  : "SearchFormCtrl"
                });

                $routeProvider.when("/property/:id", {
                    templateUrl : "modules/property-details/views/property.html",
                    controller  : "PropertyCtrl"
                });

                $routeProvider.when("/pages/:pageName", {
                    templateUrl : "modules/static-pages/views/template.html",
                    controller  : "StaticCtrl"
                });

                $routeProvider.when("/sign/:type", {
                    templateUrl : "modules/login/views/login.html",
                    controller  : "LoginCtrl"
                });
                
                $routeProvider.when("/register-success", {
                    templateUrl : "modules/login/views/register-success.html",
                    controller  : "LoginCtrl"
                });
                
                $routeProvider.when("/forgot-password", {
                    templateUrl : "modules/login/views/forgot-password.html",
                    controller  : "LoginCtrl"
                });
                
                $routeProvider.when("/forgot-password-2", {
                    templateUrl : "modules/login/views/forgot-password-2.html",
                    controller  : "LoginCtrl"
                });
                
                $routeProvider.when("/favourites", {
                    templateUrl : "modules/favourites/views/favourites.html",
                    controller  : "FavouritesCtrl"
                });
                
                // Used as an iframe on Blog
                $routeProvider.when("/property-calculator", {
                    templateUrl : "modules/property-details/views/calculator.html",
                    controller  : "PropertyCtrl"
                });
                
                $routeProvider.otherwise({
                    redirectTo : "/pages/404"
                });


                $provide.decorator('$sniffer', function ($delegate) {
                    $delegate.history = false;
                    return $delegate;
                });

                $locationProvider.html5Mode(true).hashPrefix('!');

                $httpProvider.defaults.useXDomain = true;
                //default content type
                $httpProvider.defaults.headers.post["Accept"] = "application/x-www-form-urlencoded";

                $httpProvider.responseInterceptors.push('ajaxHttpInterceptor');
                var spinnerFunction = function(data, headersGetter){
                    $("body").addClass('body-loading');
                    $("body div.loading").removeClass('hide');
                    return data;
                };

                $httpProvider.defaults.transformRequest.push(spinnerFunction);
            }]);

        //ajax interceptor for showing Ajax loader when ajax call is being made.
        app.factory("ajaxHttpInterceptor", function ($q) {
            return function (promise) {
                return promise.then(function (response) {
                    //do something on success
                    $("body div.loading").addClass('hide');
                    $("body").removeClass('body-loading');
                    
                    return response;
                },
                    function (response) {
                        $("body div.loading").addClass('hide');
                        $("body").removeClass('body-loading');
                        return $q.reject(response);
                    });
            };
        });

//        app.run(["$http", "$rootScope", "UserModel", function ($http, $rootScope, UserModel) {
//            $http.defaults.headers.common["_token"] = document.childNodes[1].getAttribute("csrf");
//            document.childNodes[1].removeAttribute("csrf");
//
//            $rootScope.$on("$locationChangeStart    ", function () {
//                if (UserModel.isLoggedIn) {
//                    $rootScope.navData.fullname = UserModel.fullname;
//                    $rootScope.navData.showLogin = UserModel.isLoggedIn;
//                    $rootScope.navData.showLoginButton = false;
//                }
//            });
//        }]);
        
        
        // ScrollToTop Fix for Anchor Tags
        // Src: http://codepen.io/jonashartmann/pen/kBqmj
        app.run(["$rootScope", "$location", "$anchorScroll", "$routeParams", 
            function($rootScope, $location, $anchorScroll, $routeParams) {
                $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
                    $location.hash($routeParams.scrollTo);
                    $anchorScroll();
                });
        }]);

        return app;
    });
}(define));
