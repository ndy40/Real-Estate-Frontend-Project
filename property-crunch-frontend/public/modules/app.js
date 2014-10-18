/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "./home/index",
    "./search/index",
    "./property-details/index",
    "./shared/index",
    "./static-pages/index",
    "./login/index",
    "./investor-dashboard/index",
    "./nav/index"
], function (angular) {
    'use strict';
    return angular.module("PCAPP", [
        "ngRoute",
        "ui.bootstrap",
        "PCAPPHOME", 
        "PCAPPSEARCH",
        "PCAPPPROPERTYDETAILS",
        "PCSHARED",
        "PCAPPSTATICPAGES",
        "PCAPPLOGIN",
        "PCAPPINVESTORDASHBOARD",
        "PCAPPNAV",
        "PCAuthModule"
    ]);
});


