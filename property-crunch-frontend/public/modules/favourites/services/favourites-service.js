/*global define */
/*
 * A Favourites Service used to Load Favourite Property Data and Cache it
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('FavService', ['$http', 'API', function ($http, API) {
        
        var FavService = function () {
            this.propertyData = null;
        };

        /**
         * CACHING SERVICE For Results
         */
        FavService.prototype.cache = function (propertyData) {
            this.propertyData = propertyData;
        };
        FavService.prototype.getCache = function () {
            return this.propertyData;
        };
        FavService.prototype.clearCache = function () {
            this.propertyData = null;
        };
        
        /**
         * Get Favourites (Properties) By Id
         */
        FavService.prototype.getFavourites = function (favourites) {
            var url = API.getFavById + "/" + favourites;
            return $http.get(url);
        };
        
        
        
        return new FavService();
    }]);
});