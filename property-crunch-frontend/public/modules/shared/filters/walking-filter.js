/*global define */
/* 
 * Custom Walking Filter - Returns Walking distance
 */

define(["../module.min"], function (app) {
    'use strict';
    return app.filter('walking', function () {
        return function (input) {
            if (input !== undefined) {
                // 5 km/h into minutes
                var walkingDistance = input / 5 * 60;
                return walkingDistance;
            }
        };
    });
});