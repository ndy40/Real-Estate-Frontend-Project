/*global define */
/* 
 * Custom Positive Filter - Removes minus (-) sign from output
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.filter('positive', function () {
        return function (input) {
            if (input < 0) {
                return input.replace(/-/g, '');
            }
        };
    });
});