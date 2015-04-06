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
                    scope.videoSrc = $sce.trustAsResourceUrl("https://www.youtube.com/embed/i8v_7iD4_pQ?VQ=HD720&amp;rel=0&amp;showinfo=0&autoplay=1&enablejsapi=1");
                };
                
                //http://stackoverflow.com/questions/26539299/disable-youtube-video-in-angularjs-playing-in-bootstrap-modal
                $('#video').on('hide.bs.modal', function () {
                    var outerDiv = document.getElementById("video");
                    var youtubeIframe = outerDiv.getElementsByTagName("iframe")[0].contentWindow;
                    youtubeIframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                });
                
            }
        };
    }]);
});