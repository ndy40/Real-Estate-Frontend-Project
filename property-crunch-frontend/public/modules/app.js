/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "ngAnimate",
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
