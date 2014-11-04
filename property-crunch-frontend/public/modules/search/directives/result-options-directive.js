/*global define */
/**
 * pcResultOptions Directive - Sort By & Results Per Page Selectboxes
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
                    /**
                    * POPULATE SELECTBOXES
                    */
                    scope.sortBy = [ // To store Sort by filter list
                        {"option": "Highest Price", "value": "price desc"},
                        {"option": "Lowest Price",  "value": "price asc"},
                        {"option": "Highest Yield", "value": "yeild desc"},
                        {"option": "Lowest Yield",  "value": "yeild asc"}
                    ];   
                    
                    scope.resultsPerPage = [ // To store results per page list
                        {"option": 25,  "value": 25},
                        {"option": 50,  "value": 50},
                        {"option": 100, "value": 100},
                        {"option": 200, "value": 200}
                    ];
                    
                    /**
                    * CALLBACK FUNCTIONS FOR SELECTBOXES
                    */

                    /**
                    * Callback function used in Sort Order SelectBox on Search Results Page. This sets the current
                    * Sorting filter after User selects an option from SelectBox.
                    */
//                    scope.setSortOrder = function (sortOrder) {
//                        scope.searchObject.filterData.sort = sortOrder.value;
//                        scope.getProperties();
//                    };
//
//                    /**
//                    * Results Per Page
//                    */
//                    scope.setResultsPerPage = function (resultsPerPage) {
//                        SearchService.setResultsPerPage(resultsPerPage.value);
//                        SearchService.setCurrentPage(1); // Resetting Pagination to 1
//                        scope.getProperties(); // Get Properties to Re-Populate Results
//                    };
//            
//                    scope.updateService = function() {
//                        SearchService.setFilters(scope.selectedFilters);
//                        scope.callback();
//                    };
                    
                }
            };
        }]);
});