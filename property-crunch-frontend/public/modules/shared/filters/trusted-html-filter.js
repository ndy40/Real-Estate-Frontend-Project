/*global define */
/* 
 * Trusted HTML Filter
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.filter('trusted_html', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
});