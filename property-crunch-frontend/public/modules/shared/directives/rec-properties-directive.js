/**
 * Recommeded Properties Carousel Directive
 */
define(["../module"], function (app) {
    app.directive("recProperties", function () {
        'use strict';
		
         return {
            restrict : "E",
            scope : {
                propertiesSrc   : "="
            },
            templateUrl : "./modules/shared/directives/rec-properties.html",
            link : function (scope, element, attr) {
                
                scope.initCarousel = function() {
                    var propertyCarousel = $('.property-img-carousel .owl-carousel'),
                        carouselItems = $('.property-img-carousel .item'),
                        nextNav = $(".property-img-carousel .next"),
                        prevNav = $(".property-img-carousel .prev");
                        
                    propertyCarousel.owlCarousel({			
                        items : 4, //10 items above 1000px browser width
                        itemsDesktop : [1199,4], //5 items between 1000px and 901px
                        itemsDesktopSmall : [991,4], // 3 items betweem 900px and 601px
                        itemsTablet: [767,4], //2 items between 600 and 0;
                        itemsMobile : [479,3], // itemsMobile disabled - inherit from itemsTablet option
                        slideSpeed: 500,
                        autoPlay: false
                    }); 
                              
                    // Custom Navigation Events
                    nextNav.on('click', function() {
                        propertyCarousel.trigger('owl.next');
                    })
                    
                    prevNav.on('click', function() {
                        propertyCarousel.trigger('owl.prev');
                    })
                };
                
                scope.$watch('propertiesSrc', function() {
                    if (scope.propertiesSrc !== undefined) {
                       scope.initCarousel();
                    } 
                });
                
            }
         };
    });
});

