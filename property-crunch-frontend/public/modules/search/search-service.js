/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["./module"], function (app) {
    'use strict';
    return app.service('SearchService', ['$http', 'APPSRCHURL', function($http, APPSRCHURL) {
        var SearchService = function () {
            this.keywords = "";
            this.results = {};
            this.filter = {};
        };
            
        SearchService.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
        };
        
        SearchService.prototype.getKeywords = function () {
            return this.keywords;
        };
        
        SearchService.prototype.cacheResults = function (results) {
            'use strict';
            this.results = results;
        };
        
        SearchService.prototype.getCache = function () {
            'use strict';
            return this.results;
        };
        
        SearchService.prototype.setFilters = function (filter) {
            'use strict';
            this.filter = filter;
        };
        /**
         * Returns the search filter object.
         * @returns Object
         */
        SearchService.prototype.getFilters = function () {
            'use strict';
            return this.filter;
        };
        
        /**
         * Generates the filter parameters as query strings for request
         * @returns {string}
         */
        SearchService.prototype.filterQueryString = function () {
            'use strict';
            
        };
        /**
         * initializes the search and returns a search result.
         * 
         * @returns {Promise}
         */
        SearchService.prototype.getResults = function () {
            var url = APPSRCHURL.search + this.keywords,
                self = this;
            if (Object.keys(this.filter) > 0) {
                var queryString = "?";
                Object.keys(this.filter).forEach(function (e) {
                    queryString += e + "=" + self.filter[e] + "&";
                });
                queryString.replace(/&$/i, "");
                url += queryString;
            }
            return $http.get(url);
        };

		
        return new SearchService();
    }]);
});
