/*global define, Exception */
/*
 * This is the Authentication Service
 *
 * @author Ndifreke Ekott <ndy40.ekott@gmail.com>
 */

define(["./module"], function (app) {
    'use strict';
    return app.factory("AuthService", ["$http", "$cookieStore", "AUTHURL",
        function ($http, $cookieStore, AUTHURL) {
            /**
             * AuthService Class for authenticating users.
             *
             * @constructor
             */
            var AuthService = function () {
                this.user = undefined;
                this.isLoggedIn = ($cookieStore.get("isLoggedIn") === "true")
                    ? true : false;
            };

            /*
             * Get the data of the currently logged in user.
             */
            AuthService.prototype.getCurentUser = function (callback) {
                $http.get(AUTHURL).success(callback);
            };
            
            /**
             * Authenticate a user and return a promise.
             *
             * @param {string} email
             * @param {string} password
             * @returns {$promise}
             */
            AuthService.prototype.authenticate = function (email, password,
                remember) {
                var parameters = { "email" : email, "password" : password,
                    remember : remember};
                return $http.post(AUTHURL, parameters);
            };

            /**
             * Verify a users login and cache the data.
             *
             * @param {string} email
             * @param {string} password
             * @returns {auth-service_L10.AuthService.prototype.user}
             */
            AuthService.prototype.login = function (email, password, remember,
                onSuccess, onFailure) {
                var self = this;

                if (remember === undefined) {
                    remember = false;
                }

                if (onSuccess === undefined) {
                    throw new Exception("No callback method provided.");
                }

                //call the authentication method to do the job.
                this.authenticate(email, password, remember)
                    .success(function (data) {
                        self.isLoggedIn = true;
                        onSuccess(data);
                    })
                    .error(function (data) {
                        self.user = null;
                        self.isLoggedIn = false;
                        if (onFailure) {
                            onFailure(data);
                        }
                    });
            };

            /**
             * Clear all login session data.
             */
            AuthService.prototype.destroy = function () {
                this.user = null;
                this.isLoggedIn = null;

                delete this.user;
                delete this.isLoggedIn;

                this.db.truncate();
            };

            AuthService.prototype.logout = function (onSuccess, onFailure) {
                var url = AUTHURL + "/logout";
                return $http.get(url).success(onSuccess).error(onFailure);
            };

            /**
            * Method for registering a new user.
            */
            AuthService.prototype.register = function (data) {
                var url = AUTHURL + "/register",
                    params;
                params = {
                    "first_name"    : data.first_name,
                    "last_name"     : data.last_name,
                    "email"         : data.email,
                    "password"      : data.password,
                    "password_confirmation" : data.password_confirmation
                };
                return $http.post(url, params);
            };

            return new AuthService();
        }]);
});
