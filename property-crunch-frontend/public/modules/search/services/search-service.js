/*global define */
/*
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('SearchService', ['$http', 'APPSRCHURL', function ($http, APPSRCHURL) {
        var SearchService = function () {
            this.keywords = "";
            this.results = {};
            this.filter = {"offer_type" : "Sale"};
            this.count = "";
            this.pageNumber = "";
        };

        /**
         * Set & Get Cache
         */
        SearchService.prototype.cacheResults = function (results) {
            this.results = results;
        };

        SearchService.prototype.getCache = function () {
            return this.results;
        };

        /**
         * Set & Get Keyword
         */
        SearchService.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
        };

        SearchService.prototype.getKeywords = function () {
            return this.keywords;
        };

        /**
         * Set & Get Current Page
         */
        SearchService.prototype.setCurrentPage = function (pageNumber) {
            this.pageNumber = pageNumber;
        };

        SearchService.prototype.getCurrentPage = function () {
            return this.pageNumber;
        };

        /**
         * Set & Get Results Per Page
         */
        SearchService.prototype.setResultsPerPage = function (count) {
            this.count = count;
        };

        SearchService.prototype.getResultsPerPage = function () {
            return this.count;
        };

        /**
         * Set & Get Filters
         */
        SearchService.prototype.setFilters = function (filter) {
            this.filter = filter || {"offer_type" : "Sale"};
        };

        /**
         * Returns the search filter object.
         * @returns Object
         */
        SearchService.prototype.getFilters = function () {
            return this.filter;
        };

        /**
         * Generates the filter parameters as query strings for request
         * @returns {string}
         */
        SearchService.prototype.filterQueryString = function (filterObject, asString) {
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
         * Get the selectBox Filter list data
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
         * Set & Get Property Details
         */
        SearchService.prototype.getProperty = function (propertyId) {
            'use strict';
            var url = APPSRCHURL.property + propertyId;
            return $http.get(url);
        };

        /**
         * initializes the search and returns a search result.
         *
         * @returns {Promise}
         */
        SearchService.prototype.getResults = function () {
            var url = APPSRCHURL.search + this.keywords + "/" + this.pageNumber + "/" + this.count,
                queryString,
                self = this;

            queryString = this.filterQueryString(this.filter, true);

            if (queryString !== null) {
                url += "?" + queryString;
            }

            return $http.get(url);
        };



        return new SearchService();
    }]);
});
