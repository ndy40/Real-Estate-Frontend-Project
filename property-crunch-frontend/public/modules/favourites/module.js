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
                "http://search.thenello.com/client/search/properties-by-ids"
        });
});