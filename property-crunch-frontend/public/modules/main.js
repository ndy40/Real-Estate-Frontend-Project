/*global require */
/**
 * Application Main setup file for RequireJs
 */

require.config({
    paths : {
        "domReady"      : "../assets/requirejs-domready/domReady",
        "modernizr"     : "../assets/js/modernizr.custom",
        "jQuery"        : "../assets/js/jquery",
        "owl-carousel"  : "../assets/js/owl.carousel",
        "angular"       : "../assets/angular/angular.min",
        "ngRoute"       : "../assets/angular-route/angular-route",
        "ui-bootstrap"  : "../assets/ui-bootstrap/ui-bootstrap-tpls-0.11.2.min",
        'cookies'       : "../assets/angular-cookies/angular-cookies.min",
        "localStorage"  : "../assets/angular-localStorageService/src/storageprovider"
    },

    shim : {
        "jQuery" : { exports : 'jQuery'},
        "owl-carousel" : ["jQuery"],
        "angular" : { exports : "angular", deps : ["jQuery", "owl-carousel"]},
        "ngRoute" : ["angular"],
        "ui-bootstrap" : ["angular"],
        "cookies" : ["angular"],
        "localStorage" : ["angular"]
    },

    deps : ["./bootstrap"],
    priority : ["domReady", "modernizr", "jQuery", "owl-carousel", "angular"]

});
