/* 
 * This is the Authentication Service
 * 
 * @author Ndifreke Ekott <ndy40.ekott@gmail.com>
 */

(function (define) {
    define(["./module"], function (app) {
        'use stict';
        return app.service("AuthService", ["$http", "$cookies", "$storage", "AUTHURL", function ($http, $cookies, $storage, AUTHURL) {
            'use strict';
            
            /**
             * AuthService Class for authenticating users.
             * 
             * @constructor
             */
            var AuthService = {
                user : undefined,
                isLoggedIn : ($cookies.isLoggedIn === undefined) ? false : $cookies.isLoggedIn,
                db : $storage("auth")
            };
            
            /*
             * Get the data of the currently logged in user.
             */
            AuthService.getCurentUser = function (onSuccess) {
                'use strict';
                var self = this;
                if ((this.user === undefined | this.user === null) && this.isLoggedIn == "false") {
                    $http.get(AUTHURL).success(function (data) {
                        self.user = data;
                        self.isLoggedIn = true;
                        $cookies.isLoggedIn = true;
                        self.db.setItem("user", data);
                        onSuccess(data);
                    });
                } else {
                    self.user = this.db.getItem("user");
                    self.isLoggedIn = true;
                    if (onSuccess)
                        onSuccess(this.user);
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
            AuthService.authenticate = function (email, password, remember) {
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
            AuthService.login = function (email, password, remember, onSuccess, onFailure) {
                'use strict';
                var self = this, 
                    callback;
                
                callback = function (data) {
//                    self.user = data;
//                    self.isLoggedIn = true;
//                    $cookies.isLoggedIn = true;
                      self.getCurentUser(onSuccess);
                };
                
                if (remember === undefined) {
                    remember = false;
                }
                
                if (onSuccess === undefined) {
                    throw new Exception ("No callback method provided.");
                }
                
                //call the authentication method to do the job.
                this.authenticate(email, password, remember).success(callback)
                    .error(function (data) {
                        self.user = null;
                        self.isLoggedIn = false;
                        $cookies.isLoggedIn = false;
                        if (onFailure)
                            onFailure(data);
                    }); 
            };
            
            /**
             * Clear all login session data.
             */
            AuthService.destroy = function () {
                this.user = null;
                this.isLoggedIn = null;
                $cookies.isLoggedIn = false;
                this.db.truncate();
            };
            
            AuthService.logout = function (onSuccess, onFailure) {
                'use strict';
                var url = AUTHURL + "/logout";
                return $http.get(url).success(onSuccess).error(onFailure);
            };
            
            /**
            * Method for registering a new user.
            */
            AuthService.register = function (data) {
                var url = AUTHURL + "/register";
                return $http.post(url, data);
            };
            
            return AuthService;
        }]);
    });
})(define);


