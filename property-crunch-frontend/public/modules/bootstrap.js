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
			"modernizr"
			], function (document) {
				// Fixed FF Bug: changed from document to document.documentElement
				// https://groups.google.com/forum/#!msg/angular/LAk9oZqRx24/sWKr5jFJQ1AJ
            	ng.bootstrap(document.documentElement, ["PCAPP"]);
        	});
    	});
}(define));
