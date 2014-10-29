/*global define */
/**
 * pcPropertyDetails - Property Details Module definition
 */

define([
    "angular",
    "ngRoute"
], function (ng) {
    'use strict';
    return ng.module("pcPropertyDetails",  [
        "ngRoute",
        "pcShared"
    ]);
});