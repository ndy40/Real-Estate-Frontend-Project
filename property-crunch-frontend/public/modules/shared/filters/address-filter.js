/*global define */
/* 
 * Custom Address Filter
 */

define(["../module.min"], function (app) {
    'use strict';
    return app.filter('address', function () {
        return function (input) {
            if (input !== undefined) {
                return input.replace(/,/g, ', ');
            }
        };
    });
});