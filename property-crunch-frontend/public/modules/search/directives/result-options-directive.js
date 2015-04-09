/*global define */
/**
 * pcResultOptions Directive - Sort By & Results Per Page Selectboxes
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcResultOptions", ["SearchService",
        function (SearchService) {

            return {
                restrict : "E",
                templateUrl : "./modules/search/directives/result-options.html",
                scope : {
                    callback: "="
                },
                link : function (scope) {
                    scope.filters = {}; //Object to Store Filters Lists

                    /**
                    * POPULATE SELECTBOXES
                    */
                    scope.filters.sortBy = [ // To store Sort by filter list
                        {"option": "Highest Price", "value": "price desc"},
                        {"option": "Lowest Price",  "value": "price asc"},
                        {"option": "Highest Yield", "value": "yield desc"},
                        {"option": "Lowest Yield",  "value": "yield asc"}
                    ];

                    // To store results per page list
                    scope.filters.resultsPerPage = [
                        {"option": 25,  "value": 25},
                        {"option": 50,  "value": 50},
                        {"option": 100, "value": 100},
                        {"option": 200, "value": 200}
                    ];

                    /**
                    * CALLBACK FUNCTIONS FOR SELECTBOXES
                    *
                    * When a user selects the filter options from selectboxes,
                    * run these functions. 
                    * 
                    * Run callback() after the user has selected an option from
                    * the selectbox
                    */
                    scope.setCurrentSortOrder = function (sortOrder) {
                        SearchService.setCurrentSortOrder(sortOrder);
                        scope.callback();
                    };
                    scope.setCurrentResultsPerPage = function (resultsPerPage) {
                        SearchService.setCurrentResultsPerPage(resultsPerPage);
                        scope.callback();
                    };

                    /**
                    * GET CURRENT FILTER VALUES
                    *
                    * The following var use SearchService to get the Current
                    * Values of the Filters. This helps cache the filters for
                    * the results.
                    */
                    scope.currentSortOrder =
                            SearchService.getCurrentSortOrder();
                    scope.currentResultsPerPage =
                            SearchService.getResultsPerPageObject();
                }
            };
        }]);
});