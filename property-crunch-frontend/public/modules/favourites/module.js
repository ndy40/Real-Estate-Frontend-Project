/*global define */
/**
 * Favourites Module definition
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
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