/*global define */
/**
 * Applicaiton module declaration file.
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

'use strict';

define([
    "favourites/index",
    "login/index",
    "property-details/index",
    "search/index",
    "shared/index",
    "static-pages/index"
], function () {
    // AngularJS App Definition & Dependency Injections
    return angular.module("PCAPP", [
        "ngRoute",
        "ngAnimate",
        "angular-tour",
        "ui.bootstrap",
        "pcFavourites",
        "pcLogin",
        "pcPropertyDetails",
        "pcSearch",
        "pcShared",
        "pcStaticPages",
        "pcAuthentication"
    ]);
});
