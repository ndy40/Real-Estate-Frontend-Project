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
                    redirect    : "@",  // Route to redirect to (if result is present.)
                    bindResult  : "=",  // Controller model to bind results of search to.
                    filters     : "=",  // Search filter parameter to be set and used by this module for performing searches.
                    callback    : "="   // this holds the name of the callback function to call on when a result is present.
                },
                link : function (scope, element, attr) {
                    scope.searchProperty = function (keywords, filters) {
                        SearchService.setKeyword(keywords);
                        SearchService.setFilters(filters);
                        SearchService.results = undefined;
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
                }
            };
        }]);
});
