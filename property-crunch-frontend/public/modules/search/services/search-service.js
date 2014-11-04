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
            this.filter = {"offer_type" : "Sale"};
            this.count = "";    // Check and Delete if not being used
            this.pager = {
                pageNumber      : 1, // Setting Default Page Number
                resultsPerPage  : 10 // Setting Default Properties Per Page
            };
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
        SearchService.prototype.clearCache = function () {
            this.results = {};
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
        };
        SearchService.prototype.getCurrentPage = function () {
            return this.pager.pageNumber;
        };
        
        
        SearchService.prototype.setResultsPerPage = function (resultsPerPage) {
            this.pager.resultsPerPage = resultsPerPage;
        };
        SearchService.prototype.getResultsPerPage = function () {
            return this.pager.resultsPerPage;
        };

        /**
         * SEARCH FILTERS
         */
        SearchService.prototype.setFilters = function (filter) {
            this.filter = filter || {"offer_type" : "Sale"};
        };
        SearchService.prototype.getFilters = function () {
            return this.filter;
        };
        /**
         * Generates the filter parameters as query strings for request
         * @returns {string}
         */
        SearchService.prototype.filterQueryString = function (filterObject,
            asString) {
            var data = filterObject || this.filter,
                query = [],
                keys;
            if (this.filter !== undefined) {
                keys = Object.keys(this.filter);
                Array.prototype.forEach.call(keys, function (e) {
                    if (data[e] !== 'All' && data[e] !== "-1") {
                        query.push(e + "=" + data[e]);
                    }
                });
                
                if (asString === true) {
                    return query.join("&");
                }
            }

            return query;
        };

        /**
         * POPULATE SELECTBOX FILTERS
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
        SearchService.prototype.getSortList = function () {
            var url = APPSRCHURL.sortList;
            return $http.get(url);
        };
        SearchService.prototype.getResultsPerPageList = function () {
            var url = APPSRCHURL.resultsPerPageList;
            return $http.get(url);
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
         * RETURN SEARCH RESULTS
         * @returns {Promise}
         */
        SearchService.prototype.getResults = function () {
            var url = APPSRCHURL.search + this.keywords + "/" + this.pager.pageNumber
                    + "/" + this.pager.resultsPerPage,
                queryString;

            queryString = this.filterQueryString(this.filter, true);

            if (queryString !== null) {
                url += "?" + queryString;
            }

            return $http.get(url);
        };

        return new SearchService();
    }]);
});