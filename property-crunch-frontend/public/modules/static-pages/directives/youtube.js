/*global define */
/**
 * pcYoutube Directive - To show custom high quality thumb
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcYoutube", ["$sce", function ($sce) {
        return {
            restrict : "EA",
            templateUrl : "./modules/static-pages/directives/youtube.html",
            link : function (scope) {
                scope.status = false;
                scope.videoSrc = $sce.trustAsResourceUrl("https://www.youtube.com/embed/i8v_7iD4_pQ?VQ=HD720&amp;rel=0&amp;showinfo=0");
                
                scope.loadVideo = function() {
                    scope.status = true;
                    scope.videoSrc = $sce.trustAsResourceUrl("https://www.youtube.com/embed/i8v_7iD4_pQ?VQ=HD720&amp;rel=0&amp;showinfo=0&autoplay=1");
                };
            }
        };
    }]);
});