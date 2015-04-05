/*global define */
/**
 * pcShared - Shared Module definition file
 */

define([
    "angular",
    "localStorage",
    "cookies",
    "./authentication/index.min"
], function (ng) {
    'use strict';
    return ng.module("pcShared",  [
        "pcAuthentication",
        "localStorageModule",
        "ngCookies"
    ])
    .constant("FAPI", {
        "addToFav"  : "api/property/add-favourite/",
        "removeFav" : "api/property/remove-favourite/"
    });
});
