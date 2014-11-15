/*global define */
/**
 * Applicaiton Angular modules declaration file
 */

define([
    "angular",
    "ngRoute",
    "ngAnimate",
    //"./investors/index",
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
        //"pcInvestors",
        "pcLogin",
        "pcPropertyDetails",
        "pcSearch",
        "pcShared",
        "pcStaticPages",
        "pcAuthentication"
    ]);
});