/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
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
