/*global define */
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
    return ng.module("pcPropertyDetails",  [
        "ngRoute"
    ])
    .constant("APPURL", {
        "property" : "http://search.thenello.com/client/search/property/",
        "avgPrice" :
            "http://search.thenello.com/client/search/average-rental-yield/",
        "priceHistory" :
            "http://search.thenello.com/client/search/property-history/",
        "comparables" :
            "http://search.thenello.com/client/search/comparable-properties/",
        "emailFriend": 
            "http://search.thenello.com/client/sendemailtofriend/",
        "requestDetails": 
            "http://search.thenello.com/client/sendrequestdetail/"
    });
});
