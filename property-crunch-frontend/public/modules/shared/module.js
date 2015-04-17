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
        "removeFav" : "api/property/remove-favourite/",
        "recProps":
            "http://app.propertycrunch.co/client/search/search-properties/oxford/1/8?offer_type=Sale"
    })
});