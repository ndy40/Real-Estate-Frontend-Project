/*global define */
/**
 * Favourites Module definition
 */

define([
    "angular"
], function (ng) {
    'use strict';
    return ng.module("pcFavourites",  [])
        .constant("API", {
            "getFavById" : 
                "http://app.propertycrunch.co/client/search/properties-by-ids"
        });
});