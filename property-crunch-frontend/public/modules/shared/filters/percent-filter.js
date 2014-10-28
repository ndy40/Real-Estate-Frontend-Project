/*global define */
/* 
 * Custom Currency Filter. Angular Native currency filter shows decimal points
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
