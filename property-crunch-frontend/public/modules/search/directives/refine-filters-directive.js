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
                    scope.selectedFilters = {
                        offer_type : "Sale", //Sale or Rent
                        rooms  : "All",
                        type : "All", // type of house. House, Apartment etc.
                        price_max : "All",
                        price_min : "All",
                        sort      : "updated_at DESC"
                    };
                    
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
                              var values = Array.prototype.map.call(data.data, function (e) {
                                  return { option : e.option, value : e.value };
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
                               var types = Array.prototype.map.call(data.data, function (e) {
                                   return { "option" : e.name, "value" : e.id };
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
                               var rentalYield =  Array.prototype.map.call(data.data, function (e) {
                                   return { option : e.option, value : e.value };
                               });
                               scope.filters.yieldList = rentalYield;
                           });
                    };
                    
                    scope.initList = function() {
                        scope.getPriceList();
                        scope.getTypeList();
                        scope.getYieldList();
                    };
                    
                    scope.initList();
                    
                    
                    /**
                    * CALLBACK FUNCTIONS FOR SELECTBOXES
                    */
                   
                    /**
                    * Setting the current Min Price & Max Price filters after
                    * User selects an option from the respective SelectBox.
                    */
                    scope.setCurrentMinPrice = function (minPrice) {
                       scope.selectedFilters.price_min = minPrice.value;
                    };

                    scope.setCurrentMaxPrice = function (maxPrice) {
                       scope.selectedFilters.price_max = maxPrice.value;
                    };
                    
                    /**
                    * Setting the current property Type filter after User
                    * selects an option from SelectBox.
                    */
                    scope.setCurrentType = function (type) {
                        scope.selectedFilters.type = type.value;
                    };
                    
                    /**
                    * Setting the current Min Yield filter after User selects an
                    * option from SelectBox.
                    */
                    scope.setCurrentYield = function (minYield) {
                        scope.selectedFilters.selectedYield = minYield.value;
                    };
                   
                    /**
                    * Setting the Number of Beds filter after User inputs a
                    * number in the Spinner
                    */
                    scope.setCurrentBeds = function (beds) {
                        scope.selectedFilters.rooms = beds;
                    };
                    
                    
                    scope.updateService = function() {
                        SearchService.setFilters(scope.selectedFilters);
                        scope.callback();
                    };
                    
                }
            };
        }]);
});