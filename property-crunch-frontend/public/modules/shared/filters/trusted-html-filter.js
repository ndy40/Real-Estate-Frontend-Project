/*global define */
/* 
 * Trusted HTML Filter
 */

define(["../module"], function (app) {
    'use strict';
    return app.filter('trusted_html', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
});