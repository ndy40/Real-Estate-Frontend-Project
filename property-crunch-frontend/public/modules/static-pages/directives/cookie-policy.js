/*global define */
/**
 * pcCookiePolicy Directive - Cookie Policy Directive
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcCookiePolicy", ["$cookieStore", function ($cookieStore) {

        return {
            restrict : "E",
            scope: {
                alertStatus: "="
            },
            templateUrl : "./modules/static-pages/directives/cookie-policy.html",
            link : function (scope) {
                if ($cookieStore.get('showCookieNote') !== 1) {
                    scope.alertStatus = true;

                    scope.closeAlert = function () {
                        scope.alertStatus = false;
                        // Saving Cookie to Disable Alert on Refresh
                        $cookieStore.put('showCookieNote', 1);
                    };
                };
            }
        };
    }]);
});