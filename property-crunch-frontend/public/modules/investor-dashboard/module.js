/*global define */
/**
 * Investor Dashboard Module definition
 */

define([
    "angular",
	"../investor-dashboard/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPINVESTORDASHBOARD",  ["PCSHARED"]);
});
