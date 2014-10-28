/**
 * Video Slider Directive
 */
define(["../module"], function (app) {
    app.directive("videoSlider", function ($window, $document) {
        'use strict';
		
        return {
            restrict : "E",
            templateUrl : "./modules/static-pages/directives/video-slider.html",
            link : function (scope, element, attr) {
                
                 scope.video = {
                    status: false    
                 };
                 
                 scope.height = element[0].offsetHeight + "px";
                 
                 scope.playVideo = function() {
                    scope.video.status = !scope.video.status;
                 };
                
            }
         };
    });
});

