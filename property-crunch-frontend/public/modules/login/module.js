/*global define */
/**
 * Investor Login Module definition
 */

define([
    "angular",
    "../authentication/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPLOGIN",  ["PCAuthModule"]);
});
