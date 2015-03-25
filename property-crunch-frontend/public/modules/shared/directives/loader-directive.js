/*global define */
/*global $*/
/**
 * pcLoader - AJAX Loader Directive
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcLoader", ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            restrict : "A",
            templateUrl : "./modules/shared/directives/loader.html",
            link : function (scope, elem) {
                $rootScope.spinnerActive = false;
                
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };
                
                scope.$watch(scope.isLoading, function (loading) {
                    $rootScope.spinnerActive = loading;
                    
                    if (loading) {
                        $('body').addClass('body-loading');
                        elem.removeClass('hide');
                    } else {
                        $('body').removeClass('body-loading');
                        elem.addClass('hide');
                    }
                });
            }
        };
    }]);
});