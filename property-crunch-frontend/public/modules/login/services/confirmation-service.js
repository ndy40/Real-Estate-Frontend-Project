/*global define */
/*
 * A service used for confirming User account after sign up
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('ConfirmationService', ["$http", "LAPI",
            function ($http, LAPI) {
        var ConfirmationService = function () {};
        
        /**
         * Update Email To Friend
         */
        ConfirmationService.prototype.confirmAccount = function (code) {
            var url =  LAPI.confirm + code;
            return $http.post(url);
        };
        
        return new ConfirmationService();
    }]);
});