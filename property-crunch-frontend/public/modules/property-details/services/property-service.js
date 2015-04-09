/*global define */
/*
 * A service used for getting Average Price & Comparables for a Property
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('propertyService', ['$http', 'APPURL', function ($http,
            APPURL) {
        var propertyService = function () {
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
         * GET PROPERTY DETAILS
         */
        propertyService.prototype.getProperty = function (propertyId) {
            var url = APPURL.property + propertyId;
            return $http.get(url);
        };
        
        /**
         * Get Average Price
         */
        propertyService.prototype.getAvgPrice =
            function (postCode, rooms, type) {
                var url = APPURL.avgPrice + postCode + "/" + rooms +
                    "/" + type + "/";
                return $http.get(url);
        };
        
        /**
         * Get Price History
         */
        propertyService.prototype.getPriceHistroy = function (propertyId) {
            var url = APPURL.priceHistory + propertyId + "/";
            return $http.get(url);
        };
        
        /**
         * Get Comparables
         */
        propertyService.prototype.getComparables = function (propertyId) {
            var url = APPURL.comparables + propertyId + "/";
            return $http.get(url);
        };
        
        return new propertyService();
    }]);
});