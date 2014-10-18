/**
 * Custom Carousel Directive
 */
define(["../module"], function (app) {
    app.directive("carousel", function ($window, $document) {
        'use strict';
		
        return {
            restrict : "E",
            scope : {
                imagesSrc   : "=",
                ngStyle     : "=",
                callback    : "="
            },
            
            templateUrl : "./modules/static-pages/directives/carousel.html",
            link : function (scope, element, attr) {
                
                scope.initCarousel = function() {
                    element.owlCarousel({			
                        items : 4, //10 items above 1000px browser width
                        itemsDesktop : [1199,3], //5 items between 1000px and 901px
                        itemsDesktopSmall : [991,2], // 3 items betweem 900px and 601px
                        itemsTablet: [767,2], //2 items between 600 and 0;
                        itemsMobile : [479,1], // itemsMobile disabled - inherit from itemsTablet option
                        slideSpeed: 500,
                        autoPlay: false
                    }); 
                };
                
                $('.item img').on('load', function() {
                    console.log('images loaded');
                });
                
                scope.$watch('imagesSrc', function() {
                    if (scope.imagesSrc !== undefined) {
                       //console.log(scope.imagesSrc.length );
                       scope.initCarousel();
                    } else {
                        //console.log('cjam');
                    }

                });
                //attr.$observe("imagesSrc", hello);
            }
         };
    });
});

