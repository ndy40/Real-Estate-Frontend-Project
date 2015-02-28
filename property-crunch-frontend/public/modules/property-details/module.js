/**
 * Property Details Module definition
 */

define([
    "angular",
    "ngRoute"
], function (ng) {
    'use strict';
    return ng.module("pcPropertyDetails",  [
        "ngRoute"
    ])
    .constant("APPURL", {
        "avgPrice"      : "http://app.propertycrunch.co/client/search/average-rental-yield/",
        "priceHistory"  : "http://app.propertycrunch.co/client/search/property-history/",
        "comparables"   : "http://app.propertycrunch.co/client/search/comparable-properties/"
    });
});
