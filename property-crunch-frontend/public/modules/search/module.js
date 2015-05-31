/*global define */
/**
 * Module definition file.
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define([
    "angular"
], function (ng) {
    'use strict';
    return ng.module("pcSearch",  [])
        .constant("APPSRCHURL", {
            "search"    : "http://search.thenello.com/client/search/search-properties/",
            "typeList"  : "http://search.thenello.com/client/search/property-types",
            "yieldList" : "./modules/search/filters-data/yield.json",
            "priceList" : "./modules/search/filters-data/price.json"
        });
});
