/*global define */
/* 
 * Custom Address Filter
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.filter('address', function () {
        return function (input) {
            if (input !== undefined) {
                return input.replace(/,/g, ', ');
            }
        };
    });
});