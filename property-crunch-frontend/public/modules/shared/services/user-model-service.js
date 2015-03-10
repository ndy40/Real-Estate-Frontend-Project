/* 
 * User Model Service - Shared service for storing user related data
 *  
*/

define(["../module", "cookies"], function (app) {
    'use strict';
    app.service("UserModel", ["AuthService", "$cookieStore", '$http', 'FAPI',
        function (AuthService, $cookieStore, $http, FAPI) {
        
        var fn = function () {
            this.isLoggedIn = $cookieStore.get("isLoggedIn");
            this.fullname = $cookieStore.get("fullname");
            this.userId = $cookieStore.get("userId");
            this.favourites = $cookieStore.get("favourites");
            this.favCount = $cookieStore.get("favCount");
        };
        
        fn.prototype.createSession = function (data) {
            if (data.hasOwnProperty("first_name")) {
                this.isLoggedIn = true;
                this.fullname = data.first_name + " " + data.last_name;
                this.userId = data.id;
                this.favourites = data.favourites;
                this.getFavCount();
                this.saveSession(data);
            }                   
        };
        
        fn.prototype.saveSession = function (data) {
            $cookieStore.put("isLoggedIn", true); 
            $cookieStore.put("fullname", data.first_name + " " + data.last_name);
            $cookieStore.put("userId", data.id);
            $cookieStore.put("favourites", data.favourites);  
            $cookieStore.put("favCount", this.favCount);           
        };
        
        fn.prototype.deleteSession = function () {
            $cookieStore.remove("isLoggedIn");
            $cookieStore.remove("fullname");
            $cookieStore.remove("userId");
            $cookieStore.remove("favourites");
            $cookieStore.remove("favCount");      
        };
        
        fn.prototype.logout = function () {
            this.isLoggedIn = null;
            this.fullname = null;
            this.deleteSession();
            AuthService.logout();
        };

        // Check to See if a Property is in Favourites
        fn.prototype.isFav = function (propertyId) {
            if( this.favourites.match(new RegExp("(?:^|,)"+propertyId+"(?:,|$)"))) {
                return true;
            } else {
                return false;
            }
        };
        
        fn.prototype.updateFavCookies = function () {
            $cookieStore.remove("favourites");
            $cookieStore.remove("favCount");   
            $cookieStore.put("favourites", this.favourites);  
            $cookieStore.put("favCount", this.favCount);  
        };
             
        // Add to Favourites on the Server
        fn.prototype.addToFav = function (propertyId) {
            return $http.get(FAPI.addToFav + this.userId + "/" + propertyId);
        };
        
        // Add to Favourites on the Frontend
        fn.prototype.addToFavFE = function (propertyId) {
            // Add Property only if not already in list
            if( !this.isFav(propertyId) ) {
                this.favourites += "," + propertyId;
                this.incFavCount(); 
                this.updateFavCookies();
            }
        };
        
        // Remove from Favourites on the Server
        fn.prototype.removeFav = function (propertyId) {
            return $http.get(FAPI.removeFav + this.userId + "/" + propertyId);
        };
        
        // Remove from Favourites on the Frontend
        fn.prototype.removeFavFE = function (propertyId) {
            var splitFav = this.favourites.split(",");
        
            for (var i = 0 ; i < splitFav.length ; i++) {
                if (splitFav[i] === propertyId) {
                    splitFav.splice(i, 1);
                }
            }
            this.favourites = splitFav.toString();
            this.decFavCount();
            this.updateFavCookies();
        };
        
        // Get Favourites Count
        fn.prototype.getFavCount = function () {
            var adjustCounted = this.favourites.split(',').length - 1;

            if (adjustCounted < 0 ) {
                this.favCount = 0;
            } else {
                this.favCount = adjustCounted;
            }
            
            return this.favCount;
        };
        
        // Increment Favourites Counter
        fn.prototype.incFavCount = function () {
            return this.favCount++;
        };
        
        // Decrement Favourites Counter
        fn.prototype.decFavCount = function () {
            return this.favCount--;
        };

        return new fn();
    }]);
});


