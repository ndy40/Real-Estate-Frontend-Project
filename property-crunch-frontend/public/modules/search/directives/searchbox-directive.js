/**
 * This directive will be responsible for displaying the search form across all
 * pages.
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcSearchForm", ["SearchService", "$location",
        function (SearchService, $location) {

            return {
                restrict : "E",
                templateUrl : "./modules/search/directives/searchbox.html",
                scope : {
                    keywords    : "=",
                    // Route to redirect to (if result is present.)
                    redirect    : "@",
                    // Controller model to bind results of search to.
                    bindResult  : "=",
                    // Search filter parameter to be set and used by this module
                    // for performing searches.
                    filters     : "=",
                    // this holds the name of the callback function to call on
                    // when a result is present.
                    callback    : "=",
                    back        : "@"
                },
                link : function (scope, element, attr) {
                    scope.searchProperty = function (keywords) {
                        // Clear Cache & Filters
                        SearchService.clearFilters();
                        SearchService.clearCache();
                        SearchService.setCurrentPage(1);
                        // Set Keywords
                        SearchService.setKeyword(keywords);
                        SearchService.getResults()
                            .success(scope.handleSearchData);
                    };

                    scope.handleSearchData = function (data) {
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
                    
                    // Search on Enter
                    scope.enterSearch = function (event, keywords) {
                        if (event.keyCode === 13) {
                            scope.searchProperty(keywords);
                        }
                    };
                }
            };
        }]);
});
