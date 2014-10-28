/*global define */
/**
 * pcVideoSlider Directive - Used on Learn More Header
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcVideoSlider", function () {

        return {
            restrict : "E",
            templateUrl : "./modules/static-pages/directives/video-slider.html",
            link : function (scope, element) {
                scope.video = {
                    status: false
                };

                scope.height = element[0].offsetHeight + "px";

                scope.playVideo = function () {
                    scope.video.status = !scope.video.status;
                };
            }
        };
    });
});