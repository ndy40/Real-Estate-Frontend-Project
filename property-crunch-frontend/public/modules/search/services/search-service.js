/*global define */
/*
 * A Search service used for passing in Search keywords and sending Location 
 * search results to the database.
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('SearchService', ['$http', 'APPSRCHURL', function ($http,
            APPSRCHURL) {
        var SearchService = function () {
            this.keywords = "";
            this.results = {};
            this.count = "";    // Check and Delete if not being used
            this.pager = {
                pageNumber      : 1, // Setting Default Page Number
                resultsPerPage  : 10 // Setting Default Properties Per Page
            };
            this.filters = {};
            this.filtersQuery = "";
            this.url = "";
        };

        /**
         * CACHING SERVICE
         */
        SearchService.prototype.cacheResults = function (results) {
            this.results = results;
        };
        SearchService.prototype.getCache = function () {
            return this.results;
        };

        /**
         * SEARCH KEYWORD
         */
        SearchService.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
        };
        SearchService.prototype.getKeywords = function () {
            return this.keywords;
        };

        /**
         * PAGINATION SERVICE 
         */
        SearchService.prototype.setCurrentPage = function (pageNumber) {
            this.pager.pageNumber = pageNumber;
            this.results = {}; // Clear Cache
        };
        SearchService.prototype.getCurrentPage = function () {
            return this.pager.pageNumber;
        };
        SearchService.prototype.getResultsPerPageValue = function () {
            return this.pager.resultsPerPage;
        };

        /**
         * POPULATE SEARCH FILTERS LISTS USED BY SELECTBOXES
         */
        SearchService.prototype.getTypeList = function () {
            var url = APPSRCHURL.typeList;
            return $http.get(url);
        };
        SearchService.prototype.getYieldList = function () {
            var url = APPSRCHURL.yieldList;
            return $http.get(url);
        };
        SearchService.prototype.getPriceList = function () {
            var url = APPSRCHURL.priceList;
            return $http.get(url);
        };

        /**
         * SET CURRENT SEARCH FILTERS
         */
        // Used by Refine Filters
        SearchService.prototype.setCurrentRooms = function (rooms) {
            this.filters.rooms = rooms;
            this.results = {}; // Clear Cache
        };
        SearchService.prototype.setCurrentType = function (type) {
            this.filters.type = type;
            this.results = {}; // Clear Cache
        };
        SearchService.prototype.setCurrentMaxPrice = function (maxPrice) {
            this.filters.price_max = maxPrice;
            this.results = {}; // Clear Cache
        };
        SearchService.prototype.setCurrentMinPrice = function (minPrice) {
            this.filters.price_min = minPrice;
            this.results = {}; // Clear Cache
        };
        SearchService.prototype.setCurrentYield = function (minYield) {
            this.filters.minYield = minYield;
            this.results = {}; // Clear Cache
        };
        // Used by Result Option Filters
        SearchService.prototype.setCurrentSortOrder = function (order) {
            this.filters.sort = order;
            this.results = {}; // Clear Cache
        };
        // Used by Result Option Filters & Pagination
        SearchService.prototype.setCurrentResultsPerPage =
            function (resultsPerPage) {
                this.filters.resultsPerPage = resultsPerPage;
                this.pager.resultsPerPage = resultsPerPage.value;
                this.results = {}; // Clear Cache
            };

        /**
         * GET SEARCH FILTERS - getting default values to show for selectbox 
         */
        // Used by Refine Filters
        SearchService.prototype.getCurrentRooms = function () {
            if (this.filters.rooms !== undefined) {
                return this.filters.rooms;
            } else {
                return "all";
            }
        };
        SearchService.prototype.getCurrentType = function () {
            if (this.filters.type !== undefined) {
                return this.filters.type;
            } else {
                return {option: 'All', value : -1};
            }
        };
        SearchService.prototype.getCurrentMaxPrice = function () {
            if (this.filters.price_max !== undefined) {
                return this.filters.price_max;
            } else {
                return {option: 'All', value : -1};
            }
        };
        SearchService.prototype.getCurrentMinPrice = function () {
            if (this.filters.price_min !== undefined) {
                return this.filters.price_min;
            } else {
                return {option: 'All', value : -1};
            }
        };
        SearchService.prototype.getCurrentYield = function () {
            if (this.filters.minYield !== undefined) {
                return this.filters.minYield;
            } else {
                return {option: 'All', value : -1};
            }
        };
        // Used by Result Options Filters
        SearchService.prototype.getCurrentSortOrder = function () {
            if (this.filters.sort !== undefined) {
                return this.filters.sort;
            } else {
                return {option: 'Most Recent', value : 'updated_at desc'};
            }
        };
        SearchService.prototype.getResultsPerPageObject = function () {
            if (this.filters.resultsPerPage !== undefined) {
                return this.filters.resultsPerPage;
            } else {
                return {option: 10, value : 10};
            }
        };

        /**
         * GET PROPERTY DETAILS
         */
        SearchService.prototype.getProperty = function (propertyId) {
            var url = APPSRCHURL.property + propertyId;
            return $http.get(url);
        };

        /**
         * GET COMPARABLES
         */
        SearchService.prototype.getComparables = function (location) {
            var url = APPSRCHURL.search + location + "/1/5";
            return $http.get(url);
        };
        
        /**
         * CONSTRUCT FILTERS QUERY
         */
        SearchService.prototype.setFiltersQuery = function () {
            if (this.filters.rooms !== undefined) {
                this.filtersQuery += "&" + "rooms=" + this.filters.rooms;
            }
            if (this.filters.type !== undefined) {
                this.filtersQuery += "&" + "type_id=" + this.filters.type.value;
            }
            if (this.filters.price_max !== undefined) {
                this.filtersQuery += "&" + "price_max=" +
                    this.filters.price_max.value;
            }
            if (this.filters.price_min !== undefined) {
                this.filtersQuery += "&" + "price_min=" +
                    this.filters.price_min.value;
            }
            if (this.filters.sort !== undefined) {
                this.filtersQuery += "&" + "sort=" + this.filters.sort.value;
            }
            if (this.filters.minYield !== undefined) {
                this.filtersQuery += "&" + "yield=" + this.filters.minYield.value;
            }
        };
        
        /**
         * SET URL - CONSTRUCT URL FOR API CALL
         */
        SearchService.prototype.setUrl = function () {
            this.url = APPSRCHURL.search + this.keywords + "/" +
                        this.pager.pageNumber + "/" + this.pager.resultsPerPage
                            + "?" + "offer_type=Sale";
        };

        /**
         * RETURN SEARCH RESULTS
         * @returns {Promise}
         */
        SearchService.prototype.getResults = function () {
            this.setFiltersQuery();
            this.setUrl();

            if (this.filtersQuery) {
                this.url += this.filtersQuery;
            }

            return $http.get(this.url);
        };
        
        
        return new SearchService();
    }]);
});