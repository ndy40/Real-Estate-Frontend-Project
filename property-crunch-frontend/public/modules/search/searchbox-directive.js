/**
 * This directive will be responsible for displaying the search form across all
 * pages. 
 */

define(["./module"], function (app) {
    app.directive("searchForm", ["SearchService", "$location", function (SearchService, $location) {
        'use strict';
        var link = function (scope, element, attr) {
            
            scope.searchProperty = function (keywords) {
                SearchService.setKeyword(keywords);
                SearchService.getResults()
                    .success(scope.handleSearchData);
            };
            
            //Can be use for Auto-complete
//            scope.$watch(attr.keywords, function (newVal, oldVal) {
//                if (newVal.length >= 3) {
//                    SearchService.setKeyword(newVal);
//                }
//            });
            
            scope.handleSearchData = function (data) {
                'use strict';
                SearchService.cacheResults(data);
                if (attr.bindResult !== undefined) {
                    scope[attr.bindResult] = data;
                }
                
                if (attr.redirect !== undefined) {
                    $location.path(attr.redirect);
                }
                
                if (attr.callback !== undefined) {
                    scope.callback(data);
                }
            };
        };
            
            
        
        return {
            restrict : "E",
            templateUrl : "./modules/search/searchform.html",
            scope : {
                keywords    : "=",
                redirect    : "@",
                bindResult  : "=",
                filters     : "=",
                callback    : "="
            },
            link : link
        };
    }]);
});