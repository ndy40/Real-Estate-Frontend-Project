/*global define */
/*
 * A service used for sending Request Details & Email Friend Emails & Saving
 * Data in DB
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('EmailService', ["$http", "APPURL",
            function ($http, APPURL) {
        var EmailService = function () {};
        
        /**
         * Update Email To Friend
         */
        EmailService.prototype.emailToFriend = function (data) {
            var toFriendAPI =  APPURL.emailFriend + data.propertyId,
                paramsFriend = {
                    "name"          : data.name,
                    "email"         : data.email, 
                    "friendemail"   : data.friendsEmail,
                    "message"       : data.msg
                };
            return $http.post(toFriendAPI, paramsFriend);
        };

        /**
         * Update Request Details Data
         */
        EmailService.prototype.emailRequestDetails = function (data) {
            var requestDetailsAPI =  APPURL.requestDetails + data.propertyId,
                paramsRequest = {
                    "name"          : data.name,
                    "email"         : data.email, 
                    "agentemail"    : data.agencyMail,
                    "agentname"     : data.agencyName,
                    "phone"         : data.phone,
                    "message"       : data.msg
                };
            console.log(paramsRequest);
            return $http.post(requestDetailsAPI, paramsRequest);
        };
        
        return new EmailService();
    }]);
});