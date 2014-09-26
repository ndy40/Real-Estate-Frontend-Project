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
<<<<<<< HEAD
                status: "",
                filter : {},
				typeOptions: {},
=======
                status: false,
                filter : {},
                pager  : {}
>>>>>>> 9fd2dff381b06d2f4abb88ff3a9b1157474d8702
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
<<<<<<< HEAD
			
			
			
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
			
			// Init all functions
			$scope.init = function() {
				 $scope.getProperties();
				 $scope.getPropertiesType();
			};
			
			$scope.init();
			
			// Setting Current Type After User selects a Property Type
			// Use this as a parameter for Search API
			$scope.setCurrentType = function(type) {
				$scope.selectFilters.selectedType = type.value;
				
				//console.log($scope.selectFilters.selectedType);
			}
			
			$scope.setCurrentBeds = function(type) {
				$scope.selectFilters.selectedBeds = type.value;
				
				//console.log($scope.selectFilters.selectedType);
			}
			
			//$scope.setCurrentBeds = function(option) {
//				$scope.selectFilters.beds = option.value;
//			}
//			
//			$scope.setCurrentYield = function(option) {
//				$scope.selectFilters.yield = option.value;
//			}
//			
//			$scope.setCurrentPrice = function(option) {
//				$scope.selectFilters.price = option.value;
//			}
			
=======
            
            $scope.$watch($scope.searchObject.properties, function (newVal, oldVal) {
                if (newVal.lenth > 0) {
                    $scope.searchObject.status = true;
                }
            });
           
            $scope.getProperties();
>>>>>>> 9fd2dff381b06d2f4abb88ff3a9b1157474d8702
        }]);
});



