/*global define, angular */
/* 
 * Custom Percent Filter
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.filter('percent', [ '$window', function ($window) {
        return function (input, decimals, suffix) {
            decimals = angular.isNumber(decimals) ? decimals : 2;
            suffix = suffix || '%';

            if ($window.isNaN(input)) {
                return '';
            }

            return Math.round(input * Math.pow(10, decimals + 2)) / Math.pow(10,
                decimals) + suffix;
        };
    }]);
});
