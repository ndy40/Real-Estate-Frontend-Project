/*global define, document, $ */
/**
 * Default route for for pcApp module.
 */
(function (define) {
    'use strict';
    define(["./app"], function (app) {
        app.config(["$routeProvider", "$locationProvider", "$provide", "$httpProvider",
            function ($routeProvider, $locationProvider, $provide, $httpProvider) {

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

                $routeProvider.when("/login", {
                    templateUrl : "modules/login/views/login.html",
                    controller  : "LoginCtrl"
                });

                $routeProvider.otherwise({
                    redirectTo : "/pages/home"
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

        app.run(["$http", "$rootScope", "UserModel", function ($http, $rootScope, UserModel) {
            $http.defaults.headers.common["_token"] = document.childNodes[1].getAttribute("csrf");
            document.childNodes[1].removeAttribute("csrf");

            $rootScope.$on("$locationChangeStart    ", function () {
                if (UserModel.isLoggedIn) {
                    $rootScope.navData.fullname = UserModel.fullname;
                    $rootScope.navData.showLogin = UserModel.isLoggedIn;
                    $rootScope.navData.showLoginButton = false;
                }
            });
        }]);
        
        
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
