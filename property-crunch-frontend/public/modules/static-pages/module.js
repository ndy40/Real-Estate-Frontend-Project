/*global define */
/**
 * pcStaticPages - Static Pages Module definition
 */

define([
    "angular",
    "ngRoute"
], function (ng) {
    'use strict';
    return ng.module("pcStaticPages",  [
        "ngRoute",
        "pcShared"
    ]);
});