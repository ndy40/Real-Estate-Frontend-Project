/**
 * Recommeded Properties Carousel Directive
 */
define(["../module"], function (app) {
    app.directive("recProperties", ["RecPropertyService", function (RecPropertyService) {
        'use strict';
		
         return {
            restrict : "E",
            templateUrl : "./modules/shared/directives/rec-properties.html",
            link : function (scope, element, attr) {
                
                scope.recProperties = {}
                 
                /**
                * Get Reccomended Property Data from Service
                */
                scope.getRecProperties = function () {
                   if (RecPropertyService.getCache().hasOwnProperty("data")) {
                       scope.loadRecProperties(RecPropertyService.getCache());
                   } else {
                       RecPropertyService.getRecProperties()
                           .success(scope.loadRecProperties);
                   }
                };

                /**
                * Loads data onto the loadRecProperties
                */
                scope.loadRecProperties = function (data) {
                   if (data.data.length > 0) {
                       scope.recProperties.status = true;
                       scope.recProperties.list = data.data;
                       scope.recProperties.count = data.count;
                   } else {
                       scope.recProperties.status = false;
                   }
                };
                
                /**
                *  Init Get Reccomended Properties
                */
                scope.getRecProperties();
                
                /**
                *  Set up Carousel
                */
                scope.initCarousel = function() {
                    var propertyCarousel = $('.recommended-carousel .owl-carousel'),
                        nextNav = $(".recommended-carousel .next"),
                        prevNav = $(".recommended-carousel .prev");
                        
                    propertyCarousel.owlCarousel({			
                        items : 4,                      // Default Items
                        itemsDesktop : [1199,3],        // 3 items between 991px and 1199px
                        itemsDesktopSmall : [991,2],    // 2 items betweem 767px and 991px
                        itemsTablet: [767,2],           // 2 items between 479px and 767px;
                        itemsMobile : [479,1],          // 1 item on mobile
                        slideSpeed: 500,
                        autoPlay: false,
                    }); 
                              
                    // Custom Navigation Events
                    nextNav.on('click', function() {
                        propertyCarousel.trigger('owl.next');
                    })
                    
                    prevNav.on('click', function() {
                        propertyCarousel.trigger('owl.prev');
                    })
                };
                
                /**
                *  Init Carousel once Data has been loaded from the Service
                */
                scope.$watch('recProperties.list', function() {
                    if (scope.recProperties.list !== undefined) {
                       scope.initCarousel();
                    } 
                });
            }
         };
    }]);
});

