/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["./module"], function (app) {
    'use strict';
    return app.service('SearchService', ['$http', 'APPSRCHURL', function($http, APPSRCHURL) {
        var SearchService = function () {
            this.keywords = "";
            this.results = {};
        };
            
        SearchService.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
        };
        
        SearchService.prototype.cacheResults = function (results) {
            'use strict';
            this.results = results;
        };
        
        SearchService.prototype.getCache = function () {
            'use strict';
            return this.results;
        };

        SearchService.prototype.getKeywords = function () {
            return this.keywords;
        };
			
        SearchService.prototype.getResults = function () {
            var url = APPSRCHURL.search + this.keywords;
            return $http.get(url);
        };
		
		SearchService.prototype.getPropertyTypes = function () {
			var url = APPSRCHURL.propertyTypes;
			return $http.get(url);
		}
		
        return new SearchService();
    }]);
});
