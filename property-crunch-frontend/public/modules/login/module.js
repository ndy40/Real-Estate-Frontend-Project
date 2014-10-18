/*global define */
/**
 * Investor Login Module definition
 */

define([
    "angular",
    "../shared/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPLOGIN",  ["PCSHARED", "PCAuthModule"]);
});
