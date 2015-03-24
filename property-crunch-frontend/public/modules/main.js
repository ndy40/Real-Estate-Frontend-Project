/*global require */
/**
 * Application Main setup file for RequireJs
 */

require.config({
    paths : {
        "domReady"      : "../assets/requirejs-domready/domReady",
        "modernizr"     : "../assets/js/modernizr.custom",
        "jQuery"        : "../assets/js/jquery",
        "twitBootstrap" : "../assets/twitter-bootstrap/bootstrap.min",
        "owl-carousel"  : "../assets/js/owl.carousel",
        "angular"       : "../assets/angular/angular.min",
        "ngRoute"       : "../assets/angular-route/angular-route",
        "ui-bootstrap"  : "../assets/ui-bootstrap/ui-bootstrap-custom-tpls-0.10.0.min",
        'cookies'       : "../assets/angular-cookies/angular-cookies.min",
        "localStorage"  : "../assets/angular-localStorageService/src/storageprovider",
        "ngAnimate"     : "../assets/angular-animate/angular-animate.min",
        "angular-tour"  : "../assets/angular-tour/angular-tour-tpls"
    },

    shim : {
        "jQuery"        : { exports : 'jQuery'},
        "twitBootstrap" : ["jQuery"],
        "owl-carousel"  : ["jQuery"],
        "angular" : { exports : "angular", deps : ["jQuery", "twitBootstrap", "owl-carousel"]},
        "ngRoute"       : ["angular"],
        "ui-bootstrap"  : ["angular"],
        "cookies"       : ["angular"],
        "localStorage"  : ["angular"],
        "ngAnimate"     : ["angular"],
        "angular-tour"  : ["angular"]
    },

    deps : ["./bootstrap"],
    priority : ["domReady", "modernizr", "jQuery", "twitBootstrap", "owl-carousel", "angular"]

});
