/*global define */
/**
 * pcKeywordFilters Directive - Refine Your Search Filters
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcKeywordFilters", ["SearchService", 
        function (SearchService) {

            return {
                restrict : "E",
                templateUrl : "./modules/search/directives/keyword-filters.html",
                scope : {
                    callback: "="
                },
                link : function (scope) {
                    
                }
            };
        }]);
});