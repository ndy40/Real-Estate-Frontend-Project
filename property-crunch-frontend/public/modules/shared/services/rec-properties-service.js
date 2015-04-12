/*global define */
/* 
 * A Recommended Propertiese Service used for getting Reccomended Properties
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('RecPropertyService', ['$http', 'FAPI',
        function ($http, FAPI) {

            var RecPropertyService = function () {
                this.results = {};
            };

            /**
             * Set & Get Cache 
             */
            RecPropertyService.prototype.cacheResults = function (results) {
                this.results = results;
            };

            RecPropertyService.prototype.getCache = function () {
                return this.results;
            };

            /**
             * Get Recommended Properties
             */
            RecPropertyService.prototype.getRecProperties = function () {
                return $http.get(FAPI.recProps);
            };

            return new RecPropertyService();
        }]);
});