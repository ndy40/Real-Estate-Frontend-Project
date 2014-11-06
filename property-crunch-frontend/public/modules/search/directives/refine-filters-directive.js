/*global define */
/**
 * pcRefineFilters Directive - Refine Your Search Filters
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcRefineFilters", ["SearchService",
        function (SearchService) {

            return {
                restrict : "E",
                templateUrl : "./modules/search/directives/refine-filters.html",
                scope : {
                    callback: "="
                },
                link : function (scope) {
                    scope.filters = {};
                    /**
                    * POPULATE SELECTBOXES
                    */
                    /**
                    * Get Price List by Using SearchService.getPriceList() &
                    * Populate the Min Price & Max Price filter SelectBoxes.
                    */
                    scope.getPriceList = function () {
                        SearchService.getPriceList()
                            .success(function (data) {
                                var values = Array.prototype.map.call(data.data,
                                    function (e) {
                                        return {option : e.option,
                                            value : e.value};
                                    });
                                scope.filters.minPriceList = values;
                                scope.filters.maxPriceList = values;
                            });
                    };

                    /**
                    * Get Property Types by Using SearchService.getTypeList() &
                    * Populate the Type Filter SelectBox.
                    */
                    scope.getTypeList = function () {
                        SearchService.getTypeList()
                            .success(function (data) {
                                var types = Array.prototype.map.call(data.data,
                                    function (e) {
                                        return { "option" : e.name,
                                            "value" : e.id };
                                    });
                                scope.filters.types = types;
                            });
                    };

                    /**
                    * Get Yield List by Using SearchService.getYieldList() &
                    * Populate the Yield Filter SelectBox.
                    */
                    scope.getYieldList = function () {
                        SearchService.getYieldList()
                            .success(function (data) {
                                var rentalYield =
                                    Array.prototype.map.call(data.data,
                                        function (e) {
                                            return { option : e.option,
                                                value : e.value };
                                        });
                                scope.filters.yieldList = rentalYield;
                            });
                    };

                    scope.initList = function () {
                        scope.getPriceList();
                        scope.getTypeList();
                        scope.getYieldList();
                    };

                    scope.initList();

                    /**
                    * CALLBACK FUNCTIONS FOR SELECTBOXES
                    *
                    * When a user selects the filter options from selectboxes,
                    * run these functions. 
                    * 
                    * The default option selected is "All" and it's value is -1.
                    * If default option is selected, make currentFilter in the
                    * Search Service "undefined" so that it's not added to
                    * filterQuery url var when SearchService.getResults() is
                    * called.
                    */

                    scope.setCurrentMinPrice = function (minPrice) {
                        if (minPrice.value !== -1) {
                            SearchService.setCurrentMinPrice(minPrice);
                        } else {
                            SearchService.setCurrentMinPrice(undefined);
                        }
                    };
                    scope.setCurrentMaxPrice = function (maxPrice) {
                        if (maxPrice.value !== -1) {
                            SearchService.setCurrentMaxPrice(maxPrice);
                        } else {
                            SearchService.setCurrentMaxPrice(undefined);
                        }
                    };
                    scope.setCurrentType = function (type) {
                        if (type.value !== -1) {
                            SearchService.setCurrentType(type);
                        } else {
                            SearchService.setCurrentType(undefined);
                        }
                    };
                    scope.setCurrentYield = function (minYield) {
                        if (minYield.value !== -1) {
                            SearchService.setCurrentYield(minYield);
                        } else {
                            SearchService.setCurrentYield(undefined);
                        }
                    };
                    scope.setCurrentRooms = function (rooms) {
                        if (rooms > 0) {
                            SearchService.setCurrentRooms(rooms);
                        } else {
                            SearchService.setCurrentRooms(undefined);
                        }
                    };

                    /**
                    * GET CURRENT FILTER VALUES
                    *
                    * The following var use SearchService to get the Current
                    * Values of the Filters. This helps cache the filters for
                    * the results.
                    */
                    scope.currentMinPrice = SearchService.getCurrentMinPrice();
                    scope.currentMaxPrice = SearchService.getCurrentMaxPrice();
                    scope.currentRooms = SearchService.getCurrentRooms();
                    scope.currentType = SearchService.getCurrentType();
                    scope.currentYield = SearchService.getCurrentYield();
                }
            };
        }]);
});