/*global define, angular */
/**
 * Defining JS files required for app and Bootstraping the Angular App
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define([
    "domReady",
    "modernizr",
    "jQuery",
    "twitBootstrap",
    "owl-carousel",
    "ngRoute",
    "ui-bootstrap",
    'cookies',
    "localStorage",
    "ngAnimate",
    "angular-tour",
    "app", 
    "routes"
], function() { 
    require([
        "domReady!",
    ], function (document) {
        angular.bootstrap(document.documentElement, ["PCAPP"]);
    });
});


