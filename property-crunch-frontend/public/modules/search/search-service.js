/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["./module"], function (service) {
    'use strict';
    return service.service('SearchService', function () {
        var SearchService = function () {
            this.keywords = "";
        };

        SearchService.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
        };

        SearchService.prototype.getKeywords = function () {
            return this.keywords;
        };

        SearchService.prototype.getSearchResult = function (onComplete, onFailure) {
            //perform some search here.
        };

        return new SearchService();
    });
});
