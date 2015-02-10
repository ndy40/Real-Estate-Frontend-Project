/* 
 * User Model Service - Shared service for storing user related data
 *  
*/

define(["../module", "localStorage", "cookies"], function (app) {
    'use strict';
    app.service("UserModel", ["AuthService", "$storage", "$cookieStore",
        '$http', 'APPURL',
            function (AuthService, $storage, $cookieStore, $http, APPURL) {
        
        var fn = function () {
            this.fullname = null;
            this.isLoggedIn = false;
            this.user = null;
            this.userId = null;
            this.favourites = null;
            this.favCount = 0;
            this.session = $storage("auth");
        };
        
        fn.prototype.logout = function () {
            this.isLoggedIn = null;
            this.fullname = null;
            this.session.removeItem("auth");
            $cookieStore.remove("isLoggedIn");
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
        
        // Add to Favourites on the Server
        fn.prototype.addToFav = function (propertyId) {
            return $http.get(APPURL.addToFav + this.userId + "/" + propertyId);
        };
        
        // Add to Favourites on the Frontend
        fn.prototype.addToFavFE = function (propertyId) {
            // Add Property only if not already in list
            if( !this.isFav(propertyId) ) {
                this.favourites += "," + propertyId;
                this.incFavCount();
            }
        };
        
        // Remove from Favourites on the Server
        fn.prototype.removeFav = function (propertyId) {
            return $http.get(APPURL.removeFav + this.userId + "/" + propertyId);
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

        fn.prototype.createSession = function (data) {
            if (data.hasOwnProperty("first_name")) {
                this.fullname = data.first_name + " " + data.last_name;
                this.userId = data.id;
                this.user = data;
                this.favourites = data.favourites;
                this.getFavCount();
                this.isLoggedIn = true;
                $cookieStore.put("isLoggedIn", true); 
                this.session.setItem("auth", data);
            }                   
        };
        
        fn.prototype.refresh = function () {
            var isLoggedIn = $cookieStore.get("isLoggedIn");

            if (isLoggedIn == true && this.user !== null) {
                this.user = this.session.getItem("auth");
                this.fullname = this.user.first_name + " " + this.user.last_name;
                this.isLoggedIn = true;
            } else if (this.user == null && isLoggedIn === null){
                this.isLoggedIn = false;
                this.user = null;
                this.fullname = null;
            }
        };

        return new fn();
    }]);
});


