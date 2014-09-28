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
                "search" 		: "http://app.propertycrunch.co/client/search/search-properties/",
				"propertyTypes"	: "http://app.propertycrunch.co/client/search/property-types",
				"yield"			: "./modules/search/filters-data/yield.json", 	// Replace this with Live API
				"price"			: "./modules/search/filters-data/price.json" 	// Replace this with Live API
            });
    });

}(define));
