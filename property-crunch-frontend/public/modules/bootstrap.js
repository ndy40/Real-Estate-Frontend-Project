/*global define, document */
/**
* Bootstrap File.
*/
(function (define) {
    'use strict';
    define([
        "require",
        "angular",
        "./app",
        "./routes"
    ], function (require, ng) {
        require([
			"domReady!",
			"ui.bootstrap",
			], function (document) {
            ng.bootstrap(document, ["PCAPP"]);
        });
    });
}(define));
