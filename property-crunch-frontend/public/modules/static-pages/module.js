/**
 * Property Details Module definition
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
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
