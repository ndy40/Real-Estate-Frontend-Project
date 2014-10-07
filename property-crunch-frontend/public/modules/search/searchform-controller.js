/**
 * Search Form Controller for the PCAPPSEARCH Module 
 */
 
define(["./module"], function (app, angular) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService", 
        function ($scope, SearchService) {
			
			/**
             * Object to Store Search Data
             */
            $scope.searchObject = {
                keywords: "london",			// Setting Default Keywords Value - Remove this Later
                properties: [],				// To store Properties
                filter : {					
					refineSearch: {},		// To store Refine Search filter List and selected Options
					sortBy: {},				// To store Sort by filter list and selected Option
					resultsPerPage: [],		// To store Results per page select list
					keywordFilters: {}		// To store Keyword Filters List and selected Options (Checkbox filters)		
				}, 
                status: false,				// Setting Default search status
                pager  : {
					pageNum			: 1,	// Setting Default Page Number 	
                    resultsPerPage	: 10,	// Setting Default Properties Per Page
					totalProperties : "", 	// To store Total Properties Per Page 
					selectedPage	: 1		
				}		
            };
			
			/**
             * Set Default Values in the Search Service. 
			 */
			$scope.setDefaultPagination = function () {
				SearchService.setKeyword($scope.searchObject.keywords); 			// Remove this Later
				SearchService.setCurrentPage($scope.searchObject.pager.pageNum);
				SearchService.setResultsPerPage($scope.searchObject.pager.resultsPerPage);
			}

			/**
			 * @description 
			 *
			 * This function provides Properties Data by using Search Service. 
			 *
			 * If the data is already loaded in SearchService.getResults() it loads
			 * cached data and gets the previously stored keywords used to Search Properties.
			 *
			 * If the data is not loaded previously, it uses $scope.searchObject.keywords and
			 * sets the keywords in SearchService.setKeyword() to be used later.
			 *
			 * It also uses $scope.searchObject.pager.pageNum and $scope.searchObject.pager.resultsPerPage
			 * to set the Results per page in SearchService.setResultsPerPage() and to set the Current Page 
			 * of the Results in SearchService.setCurrentPage() respectively. 
			 *
			 * On Success Loads Property Table Otherwise displays error in $scope.searchObject.status
			 */
            $scope.getProperties = function () {
                var cache = SearchService.getCache();
                if (SearchService.getResults().hasOwnProperty("data")) {
                    $scope.loadPropertyTable(SearchService.getCache());
                    $scope.searchObject.keywords = SearchService.getKeywords();
                } else {
                    SearchService.setKeyword($scope.searchObject.keywords);
					SearchService.setCurrentPage($scope.searchObject.pager.pageNum);
					SearchService.setResultsPerPage($scope.searchObject.pager.resultsPerPage);
                    SearchService.getResults()
                        .success($scope.loadPropertyTable)
                        .error(function (error) {
                            $scope.searchObject.status = 'Unable to load data: ' + error.message;
                        });
                }
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
				$scope.searchObject.pager.totalProperties = data.count;
				
				// Init Pagination -  totalProperties, resultsPerPage as Paramater
				$scope.initPagination($scope.searchObject.pager.totalProperties, $scope.searchObject.pager.resultsPerPage); 	
            };
			
			
			/**
             * Init Pagination
             */
			$scope.initPagination = function(totalProperties, resultsPerPage) {
				var totalProperties = totalProperties,
					totalPages = totalProperties <  resultsPerPage ? 1 : Math.ceil(totalProperties/resultsPerPage);
				
				
				$scope.searchObject.pager.pagesArray = [];
				for (var i = 0; i < totalPages; i++) {
					$scope.searchObject.pager.pagesArray.push({
						num: i+1,
						isActive: false
					});
				}
				
				$scope.setLinkStates();
				
			};
			
			
			$scope.setLinkStates = function() {
				if ($scope.searchObject.pager.selectedPage === 1) {
					$scope.searchObject.pager.pagesArray[0].isActive = true;				// Set Active
					$scope.searchObject.pager.prev = false;									// Hide Previous
				} else {
					var adjustedIndex = $scope.searchObject.pager.selectedPage - 1;
					$scope.searchObject.pager.pagesArray[adjustedIndex].isActive = true;	// Set Active
					$scope.searchObject.pager.prev = true;									// Show Previous
				}
				
				if ($scope.searchObject.pager.selectedPage === $scope.searchObject.pager.pagesArray.length) {
					$scope.searchObject.pager.next = false;
				} else {
					$scope.searchObject.pager.next = true;
				}
			}
			
			// Move to Directive Later
			$scope.selectPage = function(pageNum) {
				$scope.searchObject.pager.selectedPage = pageNum;
				$scope.searchObject.pager.pageNum = pageNum;
				$scope.getProperties();
			}
			
			/**
			 * RESULTS PER PAGE FILTER
			 */ 
			 
			/**
			 * Get Results Per Page List by Using SearchService.getResultsPerPageList() & Populate the Results per Page
			 * Filter SelectBox.
			 */
			$scope.getResultsPerPageList = function() {
				var resultsPerPage = [];
				SearchService.getResultsPerPageList()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e) {
							resultsPerPage.push({ option : e.option, value : e.value });
						});
					});
				$scope.searchObject.filter.resultsPerPage = resultsPerPage;
			};
			
			/**
			 * Callback function used in Results per Page SelectBox on Search Results Page. This sets the current  
			 * Results per Page filter after User selects an option from SelectBox.
			 */
			$scope.setResultsPerPage = function(resultsPerPage) {
				$scope.searchObject.pager.resultsPerPage = resultsPerPage.value;
				
				// Resetting Pagination
				$scope.searchObject.pager.pageNum = 1; 		// resetting page num to 1
				$scope.searchObject.pager.selectedPage = 1;	// resetting selected page num to 1
				
				// Get Properties to Re-Populate Results
				$scope.getProperties(); 
			}
			
			
			/**
			 * REFINE SEARCH FILTERS
			 */ 
			
			/**
			 * Get Property Types by Using SearchService.getTypeList() & Populate the Type Filter SelectBox.
			 */
			$scope.getTypeList = function() {
				var types = [];
				SearchService.getTypeList()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e) {
							types.push({ option : e.name, value : e.id });
						});
					});
				$scope.searchObject.filter.refineSearch.types = types;
			};
			
			/**
			 * Callback function used in property Type SelectBox on Search Results Page. This sets the current 
			 * property Type filter after User selects an option from SelectBox.
			 */
			$scope.setCurrentType = function(type) {
				$scope.searchObject.filter.refineSearch.selectedType = type.value;
			}
			
			/**
			 * Get Yield List by Using SearchService.getYieldList() & Populate the Yield Filter SelectBox.
			 */
			$scope.getYieldList = function() {
				var rentalYield = [];
				SearchService.getYieldList()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e) {
							rentalYield.push({ option : e.option, value : e.value });
						});
					});
				$scope.searchObject.filter.refineSearch.yieldList = rentalYield;
			};
			
			/**
			 * Callback function used in Yield SelectBox on Search Results Page. This sets the current Min Yield  
			 * filter after User selects an option from SelectBox.
			 */
			$scope.setCurrentYield = function(minYield) {
				$scope.searchObject.filter.refineSearch.selectedYield = minYield.value;
			}
			
			/**
			 * Get Price List by Using SearchService.getPriceList() & Populate the Min Price & Max Price
			 * filter SelectBoxes. This populates both selectBoxes, i.e. minPrice & maxPrice since the data 
			 * for both is the same.
			 */
			$scope.getPriceList = function() {
				var price = {
						"minPrice" : [],
						"maxPrice" : []
					};
				SearchService.getPriceList()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e) {
							price.minPrice.push({ option : e.option, value : e.value });
							price.maxPrice.push({ option : e.option, value : e.value });
						});
					});
				$scope.searchObject.filter.refineSearch.minPriceList = price.minPrice;
				$scope.searchObject.filter.refineSearch.maxPriceList = price.maxPrice;
			};
			
			/**
			 * Callback function used in Min & Max Price SelectBoxes on Search Results Page. Setting the current  
			 * Min Price & Max Price filters after User selects an option from the respective SelectBox.
			 */
			$scope.setCurrentMinPrice = function(minPrice) {
				$scope.searchObject.filter.refineSearch.selectedMinPrice = minPrice.value;
			}
			$scope.setCurrentMaxPrice = function(maxPrice) {
				$scope.searchObject.filter.refineSearch.selectedMaxPrice = maxPrice.value;
			}
			
			/**
			 * Callback function used in number of Beds Spinner on Search Results Page. This sets the current  
			 * Beds filter after User inputs a number in the Spinner
			 */
			$scope.setCurrentBeds = function(beds) {
				$scope.searchObject.filter.refineSearch.selectedBeds = beds;
			}
			
			
			/**
			 * SORT ORDER FILTER
			 */ 
			 
			/**
			 * Get Sort Order List by Using SearchService.getSortList() & Populate the Sorting Filter SelectBox.
			 */
			$scope.getSortList = function() {
				var sortOrder = [];
				SearchService.getSortList()
					.success(function(data) {
						Array.prototype.forEach.call(data.data, function(e) {
							sortOrder.push({ option : e.option, value : e.value });
						});
					});
				$scope.searchObject.filter.sortBy.list = sortOrder;
			};
			
			/**
			 * Callback function used in Sort Order SelectBox on Search Results Page. This sets the current  
			 * Sorting filter after User selects an option from SelectBox.
			 */
			$scope.setSortOrder = function(sortOrder) {
				$scope.searchObject.filter.sortBy.selectedOrder = sortOrder.value;
			}
			 
		
			
			/**
             * Wrapping all functions so they can be Initialized on Load
             */
			$scope.init = function() {
				 $scope.getTypeList();
				 $scope.getYieldList();
				 $scope.getPriceList();
				 $scope.getSortList();
				 $scope.getResultsPerPageList();
				 $scope.setDefaultPagination();
				 $scope.getProperties();
			};
			
			/**
             * Init all functions
             */
			$scope.init();
			
			
			// Ndi Please Provide Some Description here. Not sure What this is Used For
            $scope.$watch($scope.searchObject.properties, function (newVal, oldVal) {
                if (newVal !== undefined && newVal.hasOwnProperty("length")) {
                    $scope.searchObject.status = true;
                }
            });
			
        }]);
});



