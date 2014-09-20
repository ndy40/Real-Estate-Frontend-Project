/*global define */
/**
 * Investor Login Module definition
 */

define([
    "angular",
	"../login/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPLOGIN",  ["PCSHARED"]);
});
