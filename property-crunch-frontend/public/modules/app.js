/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "ngAnimate",
    "angular-tour",
    "./favourites/index",
    "./login/index",
    "./property-details/index",
    "./search/index",
    "./shared/index",
    "./static-pages/index"
], function (angular) {
    'use strict';
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
