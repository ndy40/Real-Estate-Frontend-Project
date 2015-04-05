/*global define */
/**
 * Investor Login Module definition
 */

define([
    "angular",
    "../shared/index.min"
], function (ng) {
    'use strict';
    return ng.module("pcLogin",  [
        "pcShared",
        "pcAuthentication"
    ]);
});
