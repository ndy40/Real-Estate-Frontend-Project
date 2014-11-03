/*global define */
/**
 * pcSearch - Search Module definition file
 */

define([
    "angular"
], function (ng) {
    'use strict';
    return ng.module("pcSearch",  [])
        .constant("APPSRCHURL", {
            "search"  : "http://app.propertycrunch.co/client/search/search-properties/",
            "property" : "http://app.propertycrunch.co/client/search/property/",
            "typeList" : "http://app.propertycrunch.co/client/search/property-types",
            "yieldList" : "./modules/search/filters-data/yield.json",
            "priceList" : "./modules/search/filters-data/price.json"
        });
});