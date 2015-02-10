/*global define */
/**
 * pcShared - Shared Module definition file
 */

define([
    "angular",
    "localStorage",
    "cookies",
    "./authentication/index"
], function (ng) {
    'use strict';
    return ng.module("pcShared",  [
        "pcAuthentication",
        "localStorageModule",
        "ngCookies"
    ])
    .constant("APPURL", {
        "recProperties" : "http://app.propertycrunch.co/client/search/search-properties/",
        "addToFav"  : "api/property/add-favourite/",
        "removeFav" : "api/property/remove-favourite/"
    });
});
