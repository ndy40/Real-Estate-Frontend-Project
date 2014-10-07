/*global define */
/**
 * Module index file.
 */
(function (define) {
    'use strict';

    define([
        "./searchform-controller", 
        "./services/search-service", 
        "./filters/currency-filter", 
        "./directives/searchbox-directive",
        "./directives/selectbox-directive",
        "./directives/spinner-directive"
        ], function () {
    });

})(define);

