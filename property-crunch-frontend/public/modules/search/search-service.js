/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["./module"], function (app) {
    'use strict';
    return app.service('SearchService', ['$http', function($http) {
        var SearchService = function () {
            this.keywords = "";
        };
            
        SearchService.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
        };

        SearchService.prototype.getKeywords = function () {
            return this.keywords;
        };
			
		var urlBase = 'http://app.propertycrunch.co/client/search/search-properties';
        SearchService.prototype.getResults = function () {
            return $http.get(urlBase + '/' + this.keywords);
		};

		
        return new SearchService();
    }]);
});
