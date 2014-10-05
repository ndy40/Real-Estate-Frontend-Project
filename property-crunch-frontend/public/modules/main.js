/*global require */
/**
 * Application Main setup file
 */

require.config({
    paths : {
        "domReady"      : "../assets/requirejs-domready/domReady",
        "angular"       : "../assets/angular/angular.min",
        "ngRoute"       : "../assets/angular-route/angular-route",
		"modernizr"		: "../assets/js/modernizr.custom",
        "jQuery"        : "../assets/js/jquery",
//		"ui-bootstrap"	: "../assets/ui-bootstrap/ui-bootstrap-tpls"
    },

    shim : {
        "angular" : { exports : "angular", deps : ["jQuery"]},
        "ngRoute" : ["angular"]
    },

    deps : ["./bootstrap"],
    priority : ["domReady", "modernizr", "jQuery", "angular"]

});
