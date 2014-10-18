/*global define */
/**
 * Module definition file.
 */

(function (define) {
    'use strict';

    define([
        "angular",
        "localStorage",
        "cookies",
       "./authentication/index"
    ], function (ng) {
        return ng.module("PCSHARED", ["PCAuthModule", "localStorageModule", "ngCookies"]);
    });

}(define));
