/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */
searchModule.service('SearchService', function () {
    'use strict';
    var fn = function () {
        this.keywords = "";
    };

    fn.prototype.setKeyword =  function (keywords) {
            this.keywords = keywords;
    };

    fn.prototype.getKeywords = function () {
            return this.keywords;
    };

    fn.prototype.getSearchResult = function (onComplete, onFailure) {
            //perform some search here.
    };
    
    return new fn();
});