/*global require */
/**
 * Application Main setup file
 */

require.config({
    paths : {
        "domReady"      : "../assets/requirejs-domready/domReady",
        "angular"       : "../assets/angular/angular.min",
        "ngRoute"       : "../assets/angular-route/angular-route",
        "modernizr"	: "../assets/js/modernizr.custom",
        "jQuery"        : "../assets/js/jquery",
        "ui-bootstrap"	: "../assets/ui-bootstrap/ui-bootstrap-custom-tpls-0.10.0.min",
        "owl-carousel"	: "../assets/js/owl.carousel",
        'cookies'       : "../assets/angular-cookies/angular-cookies.min",
        "localStorage"  : "../assets/angular-localStorageService/src/storageprovider"
    },

    shim : {
        "angular" : { exports : "angular", deps : ["jQuery", "owl-carousel"]},
        "ngRoute" : ["angular"]
    },

    deps : ["./bootstrap"],
    priority : ["domReady", "modernizr", "jQuery", "owl-carousel", "angular"]

});
