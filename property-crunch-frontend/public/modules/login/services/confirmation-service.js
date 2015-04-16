/*global define */
/*
 * A service used for confirming User account after sign up
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('ConfirmationService', ["$http", "CAPI",
            function ($http, CAPI) {
        var ConfirmationService = function () {};
        
        /**
         * Update Email To Friend
         */
        ConfirmationService.prototype.confirmAccount = function (code) {
            var url =  CAPI.confirm + code;
            return $http.get(url);
        };
        
        return new ConfirmationService();
    }]);
});