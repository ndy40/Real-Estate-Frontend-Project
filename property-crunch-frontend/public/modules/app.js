/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "./search/index",
    "./property-details/index",
    "./shared/index",
    "./static-pages/index",
    "./login/index",
    "./investor-dashboard/index",
], function (angular) {
    'use strict';
    return angular.module("PCAPP", [
        "ngRoute",
        "ui.bootstrap",
        "PCAPPSEARCH",
        "PCAPPPROPERTYDETAILS",
        "PCSHARED",
        "PCAPPSTATICPAGES",
        "PCAPPLOGIN",
        //"PCAPPINVESTORDASHBOARD",
        "PCAuthModule"
    ]);
});


