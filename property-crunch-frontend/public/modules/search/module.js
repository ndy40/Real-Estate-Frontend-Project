/*global define */
/**
 * Module definition file.
 */

(function (define) {
    'use strict';

    define([
        "angular"
    ], function (ng) {
        return  ng.module("PCAPPSEARCH", [])
            .constant("APPSRCHURL", {
                "search"            : "http://app.propertycrunch.co/client/search/search-properties/",
                "property"          : "http://app.propertycrunch.co/client/search/property/389",
                "typeList"          : "http://app.propertycrunch.co/client/search/property-types",
                "yieldList"         : "./modules/search/filters-data/yield.json", 	// Replace this with Live API
                "priceList"         : "./modules/search/filters-data/price.json", 	// Replace this with Live API
                "sortList"          : "./modules/search/filters-data/sort.json", 	// Replace this with Live API
                "resultsPerPageList": "./modules/search/filters-data/results.json" 	// Replace this with Live API
            })
    });

}(define));
