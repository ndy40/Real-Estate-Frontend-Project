/*global define */
/**
 * Agency Login Module definition
 */

define([
    "angular",
	"../property-details/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPPROPERTYDETAILS",  ["PCAPPSEARCH","PCSHARED"]);
});
