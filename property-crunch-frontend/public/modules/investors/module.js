/*global define */
/**
 * pcInvestors - Investor Dashboard Module definition
 */

define([
    "angular",
    "../investors/index"
], function (ng) {
    'use strict';
    return ng.module("pcInvestors",  ["pcShared"]);
});
