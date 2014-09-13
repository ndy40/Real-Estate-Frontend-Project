/*global define */
/**
 * Default route for for PCAPP module.
 */
(function (define) {
    'use strict';
    define(["./app"], function (app) {

        return app.config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl : "modules/home/home.html",
                controller  : "HomeCtrl"
            });

            $routeProvider.otherwise({
                redirectTo : "/"
            });
        }]);
    });
}(define));
