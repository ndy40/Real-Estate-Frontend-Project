/*global define */
/**
 * Search Form Controller for the PCAPPSEARCH Module
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService",
        function ($scope, SearchService) {

            /**
             * Object to Store Search Data
             */
            $scope.searchObject = {
                keywords: SearchService.keywords,         // Setting Default Keywords Value - Remove this Later
                properties: [],             // To store Properties
                filter : {
                    refineSearch: {},       // To store Refine Search filter List and selected Options
                    sortBy: {},             // To store Sort by filter list and selected Option
                    resultsPerPage: [
                        {"option": 25,  "value": 25},
                        {"option": 50,  "value": 50},
                        {"option": 100, "value": 100},
                        {"option": 200, "value": 200}
                    ],
                    keywordFilters: {}      // To store Keyword Filters List and selected Options (Checkbox filters)
                },
                status: false,              // Setting Default search status
                pager  : {
                    pageNum         : 1,    // Setting Default Page Number
                    resultsPerPage  : 10,   // Setting Default Properties Per Page
                    totalProperties : "",   // To store Total Properties Per Page
                    totalPages      : ""
                },
                // A convenient data structure to keep structure simple for Service. This is to make service data structure agnostic.
                filterData : {
                    offer_type : "Sale", //Sale or Rent
                    rooms  : "All",
                    type : "All", // type of house. House, Apartment etc.
                    price_max : "All",
                    price_min : "All",
                    sort      : "updated_at DESC"
                }
            };

            /**
             * Set Default Values in the Search Service.
             */
            $scope.setDefaultPagination = function () {
                SearchService.setKeyword($scope.searchObject.keywords);// Remove this Later
                SearchService.setCurrentPage($scope.searchObject.pager.pageNum);
                SearchService.setResultsPerPage($scope.searchObject.pager.resultsPerPage);
            };

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
                if (SearchService.getCache() !== undefined) {
                    $scope.loadPropertyTable(SearchService.getCache());
                    $scope.searchObject.keywords = SearchService.getKeywords();
                } else {
                    SearchService.setKeyword($scope.searchObject.keywords);
                    SearchService.setCurrentPage($scope.searchObject.pager.pageNum);
                    SearchService.setResultsPerPage($scope.searchObject.pager.resultsPerPage);
                    SearchService.setFilters($scope.searchObject.filterData);
                    SearchService.getResults()
                        .success($scope.loadPropertyTable)
                        .error(function (error) {
                            $scope.searchObject.status = 'Unable to load data: ' + error.message;
                        });
                }
                SearchService.results = undefined;
            };
            /**
             * Loads data onto the results table.
             *
             * @param Object data
             * @returns {undefined}
             */
            $scope.loadPropertyTable = function (data) {
                if (data.hasOwnProperty("data") &&  data.data.length > 0) {
                    $scope.searchObject.status = true;
                } else {
                    $scope.searchObject.status = false;
                }

                $scope.searchObject.properties = data.data;
                $scope.searchObject.pager.totalProperties = data.count;

                // Init Pagination
                $scope.initPagination();
            };


            /**
             * Provides Pagination for The Search Results. It's init in loadPropertyTable();
             */
            $scope.initPagination = function () {
                var numOfPages = Math.ceil($scope.searchObject.pager.totalProperties /
                    $scope.searchObject.pager.resultsPerPage);

                $scope.searchObject.pager.totalPages =
                    ($scope.searchObject.pager.totalProperties < $scope.searchObject.pager.resultsPerPage)
                        ? 1 : numOfPages;
                $scope.createPages();
                $scope.setActivePage($scope.searchObject.pager.pageNum);
                $scope.hideFirstOrLast();
            };

            /**
             * Being Used in the Loops of createPages() function
             */
            $scope.pushNewPage = function (i) {
                $scope.searchObject.pager.pagesArray.push({
                    num: i + 1,
                    isActive: false
                });
            };

            /**
             * Create pages for the pagination and store them in $scope.searchObject.pager.pagesArray
             */
            $scope.createPages = function () {
                var i, j, k;
                $scope.searchObject.pager.pagesArray = [];
                // If there are more than 5 pages - Limit to 5
                if ($scope.searchObject.pager.totalPages > 5) {
                    // If Current Page + 4 is Larger than Total Pages, Show Last 5 Pages
                    if ($scope.searchObject.pager.pageNum + 4 > $scope.searchObject.pager.totalPages) {
                        // Start Loop at Total Pages-5 & End Loop at Total Pages
                        for (i = $scope.searchObject.pager.totalPages - 5; i < $scope.searchObject.pager.totalPages; i += 1) {
                            $scope.pushNewPage(i);
                        }
                    } else {  // Else Show Current Page + Next 4 Pages
                    // Start Loop at Current Page (pageNum-1 to adjust array index) & End Loop at Current Page + 4
                        for (j = $scope.searchObject.pager.pageNum - 1; j < $scope.searchObject.pager.pageNum + 4; j += 1) {
                            $scope.pushNewPage(j);
                        }
                    }
                } else {// There are less than or equal to 5 pages so no need to limit to 5
                    for (k = 0; k < $scope.searchObject.pager.totalPages; k += 1) {
                        $scope.pushNewPage(k);
                    }
                }
            };

            /**
             * Set Active State of the Current Page
             */
            $scope.setActivePage = function (pageNum) {
                var i;
                if ($scope.searchObject.pager.pagesArray.length > 0) {
                    // Default Active
                    if (pageNum === 1) {
                        $scope.searchObject.pager.pagesArray[0].isActive = true; // Using pagesArray[0] because it's faster
                    } else {
                        for (i = 0; i < $scope.searchObject.pager.pagesArray.length; i += 1) {
                            if ($scope.searchObject.pager.pagesArray[i].num === pageNum) {
                                $scope.searchObject.pager.pagesArray[i].isActive = true;
                            }
                        }
                    }
                }
            };

            // Hide/ Show First or Last Pages
            $scope.hideFirstOrLast = function () {
                // Hide First if First Page
                if ($scope.searchObject.pager.pageNum === 1
                        || ($scope.searchObject.pager.pageNum !== 1 && $scope.searchObject.pager.totalPages <= 5)) {
                    $scope.searchObject.pager.first = false;
                } else {
                    $scope.searchObject.pager.first = true;
                }

                // Hide Last if Last Page
                if ($scope.searchObject.pager.pageNum === $scope.searchObject.pager.totalPages) {
                    $scope.searchObject.pager.last = false;
                } else {
                    $scope.searchObject.pager.last = true;
                }
            };

            // Change Page
            $scope.changePage = function (pageNum) {
                $scope.searchObject.pager.pageNum = pageNum;
                $scope.getProperties();
            };

            /////////////////////////////////
            /// RESULTS PER PAGE FILTER  ///
            ////////////////////////////////

            /**
             * Callback function used in Results per Page SelectBox on Search Results Page. This sets the current
             * Results per Page filter after User selects an option from SelectBox.
             */
            $scope.setResultsPerPage = function (resultsPerPage) {
                $scope.searchObject.pager.resultsPerPage = resultsPerPage.value;

                // Resetting Pagination
                $scope.searchObject.pager.pageNum = 1;// resetting page num to 1

                // Get Properties to Re-Populate Results
                $scope.getProperties();
            };


            /**
             * REFINE SEARCH FILTERS
             */

            /**
             * Get Property Types by Using SearchService.getTypeList() & Populate the Type Filter SelectBox.
             */
            $scope.getTypeList = function () {
                SearchService.getTypeList()
                    .success(function (data) {
                        var types = Array.prototype.map.call(data.data, function (e) {
                            return { "option" : e.name, "value" : e.id };
                        });
                        $scope.searchObject.filter.refineSearch.types = types;
                    });
            };

            /**
             * Callback function used in property Type SelectBox on Search Results Page. This sets the current
             * property Type filter after User selects an option from SelectBox.
             */
            $scope.setCurrentType = function (type) {
                $scope.searchObject.filterData.type = type.value;
            };

            /**
             * Get Yield List by Using SearchService.getYieldList() & Populate the Yield Filter SelectBox.
             */
            $scope.getYieldList = function () {
                SearchService.getYieldList()
                    .success(function (data) {
                        var rentalYield =  Array.prototype.map.call(data.data, function (e) {
                            return { option : e.option, value : e.value };
                        });
                        $scope.searchObject.filter.refineSearch.yieldList = rentalYield;
                    });
            };

            /**
             * Callback function used in Yield SelectBox on Search Results Page. This sets the current Min Yield
             * filter after User selects an option from SelectBox.
             */
            $scope.setCurrentYield = function (minYield) {
                $scope.searchObject.filter.refineSearch.selectedYield = minYield.value;
            };

            /**
             * Get Price List by Using SearchService.getPriceList() & Populate the Min Price & Max Price
             * filter SelectBoxes. This populates both selectBoxes, i.e. minPrice & maxPrice since the data
             * for both is the same.
             */
            $scope.getPriceList = function () {
                SearchService.getPriceList()
                    .success(function (data) {
                        var values = Array.prototype.map.call(data.data, function (e) {
                            return { option : e.option, value : e.value };
                        });
                        $scope.searchObject.filter.refineSearch.minPriceList = values;
                        $scope.searchObject.filter.refineSearch.maxPriceList = values;
                    });
            };

            /**
             * Callback function used in Min & Max Price SelectBoxes on Search Results Page. Setting the current
             * Min Price & Max Price filters after User selects an option from the respective SelectBox.
             */
            $scope.setCurrentMinPrice = function (minPrice) {
                $scope.searchObject.filterData.price_min = minPrice.value;
            };

            $scope.setCurrentMaxPrice = function (maxPrice) {
                $scope.searchObject.filterData.price_max = maxPrice.value;
            };

            /**
             * Callback function used in number of Beds Spinner on Search Results Page. This sets the current
             * Beds filter after User inputs a number in the Spinner
             */
            $scope.setCurrentBeds = function (beds) {
                $scope.searchObject.filterData.rooms = beds;
            };


            /**
             * SORT ORDER FILTER
             */

            /**
             * Get Sort Order List by Using SearchService.getSortList() & Populate the Sorting Filter SelectBox.
             */
            $scope.getSortList = function () {
                var sortOrder = [];
                SearchService.getSortList()
                    .success(function (data) {
                        Array.prototype.forEach.call(data.data, function (e) {
                            sortOrder.push({ option : e.option, value : e.value });
                        });
                    });
                $scope.searchObject.filter.sortBy.list = sortOrder;
            };

            /**
             * Callback function used in Sort Order SelectBox on Search Results Page. This sets the current
             * Sorting filter after User selects an option from SelectBox.
             */
            $scope.setSortOrder = function (sortOrder) {
                $scope.searchObject.filterData.sort = sortOrder.value;
                $scope.getProperties();
            };

            /**
            * Wrapping all functions so they can be Initialized on Load
            */
            $scope.init = function () {
                $scope.getTypeList();
                $scope.getYieldList();
                $scope.getPriceList();
                $scope.getSortList();
                $scope.setDefaultPagination();
                $scope.getProperties();
            };

            /**
            * Init all functions
            */
            $scope.init();
        }]);
});
