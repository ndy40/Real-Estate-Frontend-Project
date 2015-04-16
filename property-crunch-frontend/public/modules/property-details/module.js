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
        "property" : "http://app.propertycrunch.co/client/search/property/",
        "avgPrice" :
            "http://app.propertycrunch.co/client/search/average-rental-yield/",
        "priceHistory" :
            "http://app.propertycrunch.co/client/search/property-history/",
        "comparables" :
            "http://app.propertycrunch.co/client/search/comparable-properties/",
        "emailFriend": 
            "http://app.propertycrunch.co/client/sendemailtofriend/",
        "requestDetails": 
            "http://app.propertycrunch.co/client/sendrequestdetail/"
    });
});
