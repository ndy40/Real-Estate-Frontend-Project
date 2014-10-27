/*global define */
/**
 * Module index file.
 */
(function (define) {
    'use strict';
    define([
        "./services/rec-properties-service", 
        "./directives/rec-properties-directive",
        "./filters/currency-filter", 
        "./filters/percent-filter", 
        "./NavigationCtrl", 
        "./UserModel", 
        "./authentication/index"
        ], function () {
    });

}(define));

