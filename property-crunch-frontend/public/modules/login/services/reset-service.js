/*global define */
/*
 * A service used for resetting password
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('ResetService', ["$http", "LAPI",
            function ($http, LAPI) {
        var ResetService = function () {};
        
        /**
         * Send Request Reset Password Email
         */
        ResetService.prototype.requestReset = function (email) {
            var requestResetUrl =  LAPI.requestReset + email;
            return $http.get(requestResetUrl);
        };
        
        /**
         * Send Request Reset Password Email
         */
        ResetService.prototype.resetPass = function (data) {
            var resetPassUrl =  LAPI.resetPass,
                params = {
                    "email"     : data.email,
                    "pass"      : data.pass
                };
                
            return $http.post(resetPassUrl, params);
        };
        
        return new ResetService();
    }]);
});