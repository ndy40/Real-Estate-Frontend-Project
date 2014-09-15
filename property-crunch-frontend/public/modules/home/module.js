/*global define */
/**
 * Home Module definition
 */

define([
    "angular",
	"../shared/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPHOME",  ["PCSHARED"]);
});
