/* 
 * User Model Service - Shared service for storing user related data
 *  
*/

define(["../module", "localStorage", "cookies"], function (app) {
    'use strict';
    app.service("UserModel", ["AuthService", "$storage", "$cookieStore", function (AuthService, $storage, $cookieStore) {
        
        var fn = function () {
            this.fullname = null;
            this.isLoggedIn = false;
            this.user = null;
            this.session = $storage("auth");
        };
        
        fn.prototype.logout = function () {
            this.isLoggedIn = null;
            this.fullname = null;
            this.session.removeItem("auth");
            $cookieStore.remove("isLoggedIn");
            AuthService.logout();
        };

        fn.prototype.createSession = function (data) {
            if (data.hasOwnProperty("first_name")) {
                this.fullname = data.first_name + " " + data.last_name;
                this.user = data;
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


