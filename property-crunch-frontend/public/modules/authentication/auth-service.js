/* 
 * This is the Authentication Service
 * 
 * @author Ndifreke Ekott <ndy40.ekott@gmail.com>
 */

(function (define) {
    define(["./module"], function (app) {
        'use stict';
        return app.service("AuthService", ["$http", "$cookies", "AUTHURL", function ($http, $cookies, AUTHURL) {
            'use strict';
            
            /**
             * AuthService Class for authenticating users.
             * 
             * @constructor
             */
            var AuthService = function () {
                this.user;
                this.isLoggedIn = ($cookies.isLoggedIn === undefined) ? false : $cookies.isLoggedIn;
            };
            
            /*
             * Get the data of the currently logged in user.
             */
            AuthService.prototype.getCurentUser = function () {
                'use strict';
                var self = this;
                if (this.user === undefined) {
                    $http.get(AUTHURL).success(function (data) {
                        self.user = data;
                        self.isLoggedIn = true;
                        $cookies.isLoggedIn = true;
                    });
                }

                return this.user;
            };
            
            /**
             * Authenticate a user and return a promise.
             * 
             * @param {string} email
             * @param {string} password
             * @returns {$promise}
             */
            AuthService.prototype.authenticate = function (email, password, remember) {
                'use strict';
                var parameters = { "email" : email, "password" : password, remember : remember};
                return $http.post(AUTHURL, parameters);
            };
            
            /**
             * Verify a users login and cache the data.
             * 
             * @param {string} email
             * @param {string} password
             * @returns {auth-service_L10.AuthService.user}
             */
            AuthService.prototype.login = function (email, password) {
                'use strict';
                var self = this, 
                    callback;
                
                callback = function (data) {
                    self.user = data;
                    self.isLoggedIn = true;
                    $cookies.isLoggedIn = true;
                };
                //call the authentication method to do the job.
                this.authenticate(email, password).success(callback)
                    .error(function (data) {
                        self.user = null;
                        self.isLoggedIn = false;
                        $cookies.isLoggedIn = false;
                        throw new Exception("Failed to login " + data);
                    }); 
                
                return this.user;
            };
            
            /**
             * Clear all login session data.
             */
            AuthService.prototype.destroy = function () {
                this.user = null;
                this.isLoggedIn = null;
                $cookies.isLoggedIn = false;
            };
            
            /**
            * Method for registering a new user.
            */
            AuthService.prototype.register = function (data) {
                var url = AUTHURL + "/register";
                return $http.post(url, data);
            };
            
            return new AuthService();
        }]);
    });
})(define);


