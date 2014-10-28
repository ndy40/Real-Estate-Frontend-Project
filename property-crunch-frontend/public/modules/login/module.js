/*global define */
/**
 * pcLogin - User Login Module definition
 */

define([
    "angular",
    "../shared/index"
], function (ng) {
    'use strict';
    return ng.module("pcLogin",  [
        "pcShared",
        "pcAuthentication"
    ]);
});