/*global define */
/**
 * testimonialCarousel Directive - Used on Home Page
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("testimonialCarousel", function () {

        return {
            restrict : "E",
            templateUrl:
                "./modules/static-pages/directives/testimonial-carousel.html",
            link : function (scope, element) {
                element.carousel();
            }
        };
    });
});