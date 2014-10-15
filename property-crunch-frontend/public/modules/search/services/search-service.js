/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('SearchService', ['$http', 'APPSRCHURL', function($http, APPSRCHURL) {
        var SearchService = function () {
            this.keywords = "";
            this.results = {};
            this.filter = {};
            this.count = "";
            this.pageNumber = "";	
        };
        
        /**
         * Set & Get Cache 
         */ 
        SearchService.prototype.cacheResults = function (results) {
            'use strict';
            this.results = results;
        };
		
        SearchService.prototype.getCache = function () {
            'use strict';
            return this.results;
        };
		
        /**
         * Set & Get Keyword 
         */    
        SearchService.prototype.setKeyword =  function (keywords) {
            'use strict';
            this.keywords = keywords;
        };
		
        SearchService.prototype.getKeywords = function () {
            'use strict';
            return this.keywords;
        };
        	
        /**
         * Set & Get Current Page
         */
        SearchService.prototype.setCurrentPage = function (pageNumber) {
            'use strict';
            this.pageNumber = pageNumber;
        };
		
        SearchService.prototype.getCurrentPage = function () {
            'use strict';
            return this.pageNumber;
        };
		
        /**
         * Set & Get Results Per Page 
         */
        SearchService.prototype.setResultsPerPage = function (count) {
            'use strict';
            this.count = count;
        };
		
	SearchService.prototype.getResultsPerPage = function () {
            'use strict';
            return this.count;
        };
		
	/**
         * Set & Get Filters 
         */
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
         * Get the selectBox Filter list data 
         */
        SearchService.prototype.getTypeList = function () {
            var url = APPSRCHURL.typeList;
            return $http.get(url);
        }

        SearchService.prototype.getYieldList = function () {
            var url = APPSRCHURL.yieldList;
            return $http.get(url);
        }
		
        SearchService.prototype.getPriceList = function () {
            var url = APPSRCHURL.priceList;
            return $http.get(url);
        }

        SearchService.prototype.getSortList = function () {
            var url = APPSRCHURL.sortList;
            return $http.get(url);
        }

        SearchService.prototype.getResultsPerPageList = function () {
            var url = APPSRCHURL.resultsPerPageList;
            return $http.get(url);
        }
		
	
        /**
         * Set & Get Property Details 
         */ 
        SearchService.prototype.getProperty = function () {
            'use strict';
            var url = APPSRCHURL.property;
            return $http.get(url);
        };
        
        /**
         * initializes the search and returns a search result.
         * 
         * @returns {Promise}
         */
        SearchService.prototype.getResults = function () {
            var url = APPSRCHURL.search + this.keywords + "/" + this.pageNumber + "/" + this.count,
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
