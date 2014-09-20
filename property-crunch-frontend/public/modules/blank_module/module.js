/*global define */
/**
 * Agency Login Module definition
 */

define([
    "angular",
	"../agency-login/index"
], function (ng) {
    'use strict';
    return ng.module("PCAPPAGENCYLOGIN",  ["PCSHARED"]);
});
