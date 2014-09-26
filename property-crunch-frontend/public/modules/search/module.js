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
				"propertyTypes"	: "http://app.propertycrunch.co/client/search/property-types"
            });
    });

}(define));
