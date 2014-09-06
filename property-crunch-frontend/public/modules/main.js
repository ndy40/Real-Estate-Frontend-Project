/*global require */
/**
 * Application Main setup file
 */

require.config({
    paths : {

        "domReady"      : "../assets/requirejs-domready/domReady",
        "angular"       : "../assets/angular/angular.min",
        "ngRoute"       : "../assets/angular-route/angular-route",
        "jQuery"        : "../assets/js/jquery"
    },

    shim : {
        "angular" : { exports : "angular", deps : ["jQuery"]},
        "ngRoute" : ["angular"]
    },

    deps : ["./bootstrap"],
    priority : ["domReady", "jQuery", "angular"]

});
