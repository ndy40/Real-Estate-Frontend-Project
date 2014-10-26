/**
 * Custom Carousel Directive
 */
define(["../module"], function (app) {
    app.directive("carousel", function ($window, $document) {
        'use strict';
		
        return {
            restrict : "E",
            scope : {
                imagesSrc   : "="
            },
            templateUrl : "./modules/property-details/directives/carousel.html",
            link : function (scope, element, attr) {
                
                 scope.currentImg = "";
                
                //element.css('width', '1170px');
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
                              
                    // Activate First Image
                    scope.currentImg = scope.imagesSrc[0].image;
                    
                    
                    // Get src for item that hasClass .active & update scope 
                    scope.updatePreview = function() {
                        //Use the commented code to use thumbs
                        //scope.currentImg = $('.item.active img').attr('large-src');
                        scope.currentImg = $('.item.active img').attr('src');
                        scope.$apply();
                    };
                    
                    // Active Thumb State
                    carouselItems.on('click', function() {
                        carouselItems.removeClass('active');
                        $(this).addClass('active');
                    });
                    
                    // Custom Navigation Events
                    nextNav.on('click', function() {
                        propertyCarousel.trigger('owl.next');
                        
                        // Set Active Class
                        // jQuery select Next Item
                        var nextItem = $('.property-img-carousel .item.active')
                            .parent().next().children('.item');
                        
                        // jQuery if last item - Could also use nextItem.hasClass('last')
                        if (nextItem.length === 0) {
                            carouselItems.removeClass('active');
                             $('.property-img-carousel .first').addClass('active');
                        } else {
                            nextItem.addClass('next');
                            carouselItems.removeClass('active');
                            $('.item.next').addClass('active').removeClass('next');
                        }
                        
                        scope.updatePreview();
                    })
                    
                    prevNav.on('click', function() {
                        propertyCarousel.trigger('owl.prev');
                        
                        // Set Active Class
                        // jQuery select Next Item
                        var prevItem = $('.property-img-carousel .item.active')
                            .parent().prev().children('.item');
                        
                        // jQuery if last item - Could also use prevItem.hasClass('first')
                        if (prevItem.length === 0) {
                            carouselItems.removeClass('active');
                             $('.property-img-carousel .last').addClass('active');
                        } else {
                            prevItem.addClass('prev');
                            carouselItems.removeClass('active');
                            $('.item.prev').addClass('active').removeClass('prev');
                        }
                        
                        scope.updatePreview();
                    })
                };
                
                scope.setCurrentImg = function(imgSrc) {
                    scope.currentImg = imgSrc;
                };
                
                scope.$watch('imagesSrc', function() {
                    if (scope.imagesSrc !== undefined) {
                       scope.initCarousel();
                    } 
                });
                
            }
         };
    });
});

