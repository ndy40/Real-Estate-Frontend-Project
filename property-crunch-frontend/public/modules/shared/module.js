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
        return ng.module("PCSHARED", [
            "PCAuthModule", 
            "localStorageModule", 
            "ngCookies"
        ])
        .constant("APPURL", {
            "recProperties" : "http://app.propertycrunch.co/client/search/search-properties/"
        });
    });

}(define));
