/**
 * Property Details Module definition
 */

define([
    "angular",
    "ngRoute",
    "../search/index"
], function (ng) {
    'use strict';
    return ng.module("pcStaticPages",  [
        "ngRoute",
        "pcShared",
        "pcSearch"
    ]);
});
