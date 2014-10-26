/*global define */
/**
 * Default route for for PCAPP module.
 */
(function (define) {
    'use strict';
    define(["./app"], function (app) {
        app.config(["$routeProvider", "$locationProvider", "$provide", 
            function ($routeProvider, $locationProvider, $provide) {
                $routeProvider.when("/search", {
                    templateUrl : "modules/search/searchresult.html",
                    controller  : "SearchFormCtrl"
                });

                $routeProvider.when("/property/:id", {
                    templateUrl : "modules/property-details/property.html",
                    controller  : "PropertyCtrl"
                });

                $routeProvider.when("/pages/:pageName", {
                    templateUrl : "modules/static-pages/static.html",
                    controller  : "StaticCtrl"
                });

                $routeProvider.when("/login", {
                    templateUrl : "modules/login/login.html",
                    controller  : "LoginCtrl"
                });

                $routeProvider.otherwise({
                    redirectTo : "/pages/home"
                });

                $provide.decorator('$sniffer', function($delegate) {
                  $delegate.history = false;
                  return $delegate;
                });

                $locationProvider.html5Mode(true).hashPrefix('!');
        }]);
    
        return app.run(["$http", "$rootScope", "AuthService", "UserModel", function ($http, $rootScope, AuthService, UserModel) {
            var csrf_token = document.childNodes[1].getAttribute("csrf");
            $http.defaults.headers.common['_token'] = csrf_token;
            document.childNodes[1].removeAttribute("csrf");

            $rootScope.$on("$locationChangeStart    ", function () {
                if (UserModel.isLoggedIn) {     
                    $rootScope.navData.fullname = UserModel.fullname;
                    $rootScope.navData.showLogin = UserModel.isLoggedIn;
                    $rootScope.navData.showLoginButton = false;
                }
            });
            
            //default content type
//            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        }]);
    });
}(define));
