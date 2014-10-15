/**
 * This directive will be responsible for displaying the search form across all
 * pages. 
 */

define(["../module"], function (app) {
    app.directive("searchForm", ["SearchService", "$location", function (SearchService, $location) {
        'use strict';
        var link = function (scope, element, attr) {
            
            scope.searchProperty = function (keywords) {
                SearchService.setKeyword(keywords);
                SearchService.getResults()
                    .success(scope.handleSearchData);
            };

            scope.handleSearchData = function (data) {
                'use strict';
                if (attr.bindResult !== undefined) {
                    scope[attr.bindResult] = data;
                }
                
                if (attr.redirect !== undefined) {
					SearchService.cacheResults(data);
                    $location.path(attr.redirect);
                }
                
                if (attr.callback !== undefined) {
                    scope.callback(data);
                }
            };
        };
            
            
        
        return {
            restrict : "E",
            templateUrl : "./modules/search/directives/searchbox.html",
            scope : {
                keywords    : "=",
                redirect    : "@",  // this is the route to redirect to when result is present. 
                bindResult  : "=",  //The Controller model to bind results of search to.
                filters     : "=",  //this is the search filter parameter to be set and used by this module for performing searches. 
                callback    : "=" // this holds the name of the callback function to call on when a result is present. 

            },
            link : link
        };
    }]);
});