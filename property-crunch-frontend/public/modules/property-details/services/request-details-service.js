/*global define */
/*
 * A service used for sending "Request Details" Emails & Saving Data in DB
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('RequestDetailsService', ['$http', 'APPSRCHURL', function ($http,
            APPSRCHURL) {
        var SearchService = function () {
            this.keywords = "";
            this.results = {};
            this.count = "";    // Check and Delete if not being used
        };

        /**
         * CACHING SERVICE For Results
         */
        SearchService.prototype.cacheResults = function (results) {
            this.results = results;
        };
        
        
        return new SearchService();
    }]);
});