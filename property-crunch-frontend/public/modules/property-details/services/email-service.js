/*global define */
/*
 * A service used for sending Request Details & Email Friend Emails & Saving
 * Data in DB
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('emailService', function () {
        var emailService = function () {
            this.toFriend = {
                name            : "",
                email           : "",
                friendsEmail    : "",
                msg             : "",
                propertyTitle   : "",
                propertyImg     : "",
                propertyPrice   : ""
            };
            
            this.requestDetails = {
                name        : "",
                email       : "",
                phone       : "",
                msg         : "",
                agencyName  : "",
                agencyPhone : "",
                propertyId  : ""
            };
        };
        
        /**
         * Update Email To Friend
         */
        emailService.prototype.updateToFriend = function (data) {
            this.toFriend = {
                name            : data.name,
                email           : data.email,
                friendsEmail    : data.friendsEmail,
                msg             : data.msg,
                propertyTitle   : data.propertyTitle,
                propertyImg     : data.propertyImg,
                propertyPrice   : data.propertyPrice
            };
        };

        /**
         * Update Request Details Data
         */
        emailService.prototype.updateRequestDetails = function (data) {
            this.requestDetails = {
                name        : data.name,
                email       : data.email,
                phone       : data.phone,
                msg         : data.msg,
                agencyName  : data.agencyName,
                agencyPhone : data.agencyPhone,
                propertyId  : data.propertyId
            };
        };
        
        
        return new emailService();
    });
});