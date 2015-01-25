/*global define */
/**
 * Module definition file.
 */

define([
    "angular"
], function (ng) {
    'use strict';
    return ng.module("pcSearch",  [])
        .constant("APPSRCHURL", {
            "search"   : "http://propertycrunch.local/client/search/search-properties/",
            "property" : "http://propertycrunch.local/client/search/property/",
            "typeList" : "http://propertycrunch.local/client/search/property-types",
            "yieldList" : "./modules/search/filters-data/yield.json",
            "priceList" : "./modules/search/filters-data/price.json"
        });
});
