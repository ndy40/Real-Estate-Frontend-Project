/**
*  Bootstrap the angular
*
*/

define([
    "require",
    "angular",
    "app"
], function (require, angular) {
    'use strict';
    require(["app"], function (app) {
        angular.bootstrap(document.getElementsByTagName("body")[0], ["app"]);
    });

})