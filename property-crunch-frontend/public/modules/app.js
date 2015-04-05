/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "ngAnimate",
    "angular-tour",
    "./favourites/index.min",
    "./login/index.min",
    "./property-details/index.min",
    "./search/index.min",
    "./shared/index.min",
    "./static-pages/index.min"
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
