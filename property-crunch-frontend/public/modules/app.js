/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "./home/index",
    "./search/index"
], function (angular) {
    'use strict';
    return angular.module("PCAPP", ["ngRoute", "PCAPPHOME", "PCAPPSEARCH"]);
});


