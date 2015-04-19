/*global define */
/**
 * Investor Login Module definition
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define([
    "angular",
    "../shared/index"
], function (ng) {
    'use strict';
    return ng.module("pcLogin",  [
        "pcShared",
        "pcAuthentication"
    ])
    .constant("LAPI", {
        "confirm"       : "api/auth/confirm-account/",
        "requestReset"  : "api/auth/forgot-password/",
        "resetPass"     : "api/auth/reset-password/"
    });
});
