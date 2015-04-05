/*global require */
/**
 * Application Main setup file for RequireJs
 */
require.config({
    paths : {
        "domReady"      : "../assets/js/requirejs/lib/domReady/domReady.min",
        "modernizr"     : "../assets/js/modernizr/modernizr.min",
        "jQuery"        : "../assets/js/jQuery/jQuery-2.1.1.min",
        "twitBootstrap" : "../assets/js/jQuery/libs/bootstrap.min",
        "owl-carousel"  : "../assets/js/jQuery/libs/owlCarousel-1.3.3.min",
        "angular"       : "../assets/js/angular/angular.min",
        "ngRoute"       : "../assets/js/angular/lib/ng-route/angular-route.min",
        "ui-bootstrap"  : "../assets/js/angular/lib/ng-uiBs/uiBs-tpls-0.10.min",
        'cookies'       : "../assets/js/angular/lib/ng-cookies/ng-cookies.min",
        "localStorage"  :"../assets/js/angular/lib/ng-localStorage/storage.min",
        "ngAnimate"     : "../assets/js/angular/lib/ng-animate/ng-animate.min",
        "angular-tour"  : "../assets/js/angular/lib/ng-tour/ng-tour-tpls.min"
    },

    shim : {
        "jQuery"        : { exports : 'jQuery'},
        "twitBootstrap" : ["jQuery"],
        "owl-carousel"  : ["jQuery"],
        "angular"       : { 
                            exports : "angular",
                            deps : ["jQuery", "twitBootstrap", "owl-carousel"]
                        },
        "ngRoute"       : ["angular"],
        "ui-bootstrap"  : ["angular"],
        "cookies"       : ["angular"],
        "localStorage"  : ["angular"],
        "ngAnimate"     : ["angular"],
        "angular-tour"  : ["angular"]
    },

    deps : ["./bootstrap.min"],

    priority : [
        "domReady",
        "modernizr",
        "jQuery",
        "twitBootstrap",
        "owl-carousel",
        "angular"
    ]
});
