/*global define */
/**
 * Investor Login Module definition
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
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
