/*global define */
/**
 * pcCookiePolicy Directive - Cookie Policy Directive
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcCookiePolicy", function () {

        return {
            restrict : "E",
            templateUrl : "./modules/static-pages/directives/cookie-policy.html",
            link : function (scope) {
                scope.alertStatus = true;
                scope.closeAlert = function () {
                    scope.alertStatus = false;
                };
            }
        };
    });
});