/*global define */
/**
 * pcAuthentication - Authentication Module (authentication logic and services)
 */

define([
    "angular",
    "cookies"
], function (ng) {
    'use strict';
    return ng.module("pcAuthentication",  ["ngCookies"])
        .constant("AUTHURL", "/api/auth");
});
