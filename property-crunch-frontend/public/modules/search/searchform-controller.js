/*global define */
/**
 * SearchController 
 */
define(["./module"], function (app, angular) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService", 
        function ($scope, SearchService) {

            $scope.searchObject = {
                keywords: "london",
                properties: [],
                filter : {},
                status: false,
                pager  : {}
            };
			
            /**
             * Loads data onto the results table. 
             * @param Object data
             * @returns {undefined}
             */
            $scope.loadPropertyTable = function (data) {
                if (data.data.length > 0) {
                    $scope.searchObject.status = true;
                } else {
                    $scope.searchObject.status = false;
                }
                $scope.searchObject.properties = data.data;
                $scope.searchObject.pager = {
                    count : data.count,
                    size  : data.size,
                    page  : data.page
                };

            };

            $scope.getProperties = function () {
                var cache = SearchService.getCache();
                if (SearchService.getResults().hasOwnProperty("data")) {
                    $scope.loadPropertyTable(SearchService.getCache());
                    $scope.searchObject.keywords = SearchService.getKeywords();
                } else {
                    SearchService.setKeyword($scope.searchObject.keywords);
                    SearchService.getResults()
                        .success($scope.loadPropertyTable)
                        .error(function (error) {
                            $scope.searchObject.status = 'Unable to load data: ' + error.message;
                        });
                }
            };
			
			
			
			/**
             * Populate SelectBox Filters
             */
			$scope.selectFilters = {};
			
			// Get Property Types
			$scope.getPropertiesType = function() {
				var types = [];
				
				SearchService.getPropertyTypes()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e){
							types.push({
								option : e.name, 
								value : e.id
							});
						});
					});
					
				$scope.selectFilters.type = types;
			};
			
			// Get Yield Filter List
			$scope.getYieldFilters = function() {
				var rentalYield = [];
				
				SearchService.getYieldFilters()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e){
							rentalYield.push({
								option : e.option, 
								value : e.value
							});
						});
					});
					
				$scope.selectFilters.yield = rentalYield;
			};
			
			// Get Price Filter List
			$scope.getPriceFilters = function() {
				var price = {
						"minPrice" : [],
						"maxPrice" : []
					};
				
				SearchService.getPriceFilters()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e){
							price.minPrice.push({
								option : e.option, 
								value : e.value
							});
							price.maxPrice.push({
								option : e.option, 
								value : e.value
							});
						});
					});
					
				$scope.selectFilters.minPrice = price.minPrice;
				$scope.selectFilters.maxPrice = price.maxPrice;
			};
			
			
			// Init all functions
			$scope.init = function() {
				 $scope.getProperties();
				 $scope.getPropertiesType();
				 $scope.getYieldFilters();
				 $scope.getPriceFilters();
			};
			
			$scope.init();
			
			// Setting Current Type After User selects a Property Type - Use this as a parameter for Search API
			$scope.setCurrentType = function(type) {
				$scope.selectFilters.selectedType = type.value;
				//console.log($scope.selectFilters.selectedType);
			}
			
			// Setting Current Yield after User selects a Min Yield - Use this as a parameter for Search API
			$scope.setCurrentYield = function(rentalYield) {
				$scope.selectFilters.selectedYield = rentalYield.value;
				//console.log($scope.selectFilters.selectedYield);
			}
			
			// Setting Current Min Price After User selects a Min Price - Use this as a parameter for Search API
			$scope.setCurrentMinPrice = function(minPrice) {
				$scope.selectFilters.selectedMinPrice = minPrice.value;
				//console.log($scope.selectFilters.selectedMinPrice);
			}
			
			// Setting Current Max Price After User selects a Max Price - Use this as a parameter for Search API
			$scope.setCurrentMaxPrice = function(maxPrice) {
				$scope.selectFilters.selectedMaxPrice = maxPrice.value;
				//console.log($scope.selectFilters.selectedMaxPrice);
			}
			
			// Setting Current Beds After User selects # of Beds - Use this as a parameter for Search API
			$scope.setCurrentBeds = function(selectedVal) {
				$scope.selectFilters.selectedBeds = selectedVal;
				//console.log($scope.selectFilters.selectedBeds);
			}
			
            
            $scope.$watch($scope.searchObject.properties, function (newVal, oldVal) {
                if (newVal !== undefined && newVal.hasOwnProperty("length")) {
                    $scope.searchObject.status = true;
                }
            });
           
        }]);
});



