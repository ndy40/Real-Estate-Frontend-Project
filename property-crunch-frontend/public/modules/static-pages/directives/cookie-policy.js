/**
 * Cookie Policy Directive
 */
define(["../module"], function (app) {
    app.directive("cookiePolicy", function ($window, $document) {
        'use strict';
		
        return {
            restrict : "E",
            templateUrl : "./modules/static-pages/directives/cookie-policy.html",
            link : function (scope, element, attr) {
                
                 scope.alertStatus = true;
                 
                 scope.closeAlert = function() {
                    scope.alertStatus = false;
                 };
                 
                
            }
         };
    });
});

