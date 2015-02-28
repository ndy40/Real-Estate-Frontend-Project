/*global define */
/*
 * A service used for getting Average Price & Comparables for a Property
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('propertyService', ['$http', 'APPURL', function ($http,
            APPURL) {
        var propertyService = function () {
            this.avgPriceUrl        = "";
            this.priceHistroyUrl    = "";
            this.comparablesUrl     = "";
            
            this.avgPrice           = "";
            this.priceHistroy       = "";
            this.comparables        = {};
        };
        
        /**
         * Caching
         */
        propertyService.prototype.cacheAvgPrice = function (avgPrice) {
            this.avgPrice = avgPrice;
        };
        propertyService.prototype.getAvgPriceCache = function () {
            return this.avgPrice;
        };
        propertyService.prototype.clearAvgPriceCache = function () {
            this.avgPrice = "";
        };
        propertyService.prototype.cacheComparables = function (comparables) {
            this.comparables = comparables;
        };
        propertyService.prototype.getComparablesCache = function () {
            return this.comparables;
        };
        propertyService.prototype.clearComparablesCache = function () {
            this.comparables = {};
        };


        /**
         * Get Average Price
         */
        propertyService.prototype.getAvgPrice =
            function (postCode, rooms, type) {
                this.avgPriceUrl = APPURL.avgPrice + postCode + "/" + rooms +
                    "/" + type + "/";
                return $http.get(this.avgPriceUrl);
        };
        
        /**
         * Get Price History
         */
        propertyService.prototype.getPriceHistroy = function (propertyId) {
            this.priceHistroyUrl = APPURL.priceHistory + propertyId + "/";
            return $http.get(this.priceHistroyUrl);
        };
        
        /**
         * Get Comparables
         */
        propertyService.prototype.getComparables = function (propertyId) {
            this.comparablesUrl = APPURL.comparables + propertyId + "/";
            return $http.get(this.comparablesUrl);
        };
        
        return new propertyService();
    }]);
});