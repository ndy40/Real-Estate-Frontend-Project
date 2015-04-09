/*global define */
/**
 * pcShared - Shared Module definition file
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
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
    .constant("FAPI", {
        "addToFav"  : "api/property/add-favourite/",
        "removeFav" : "api/property/remove-favourite/"
    });
});
