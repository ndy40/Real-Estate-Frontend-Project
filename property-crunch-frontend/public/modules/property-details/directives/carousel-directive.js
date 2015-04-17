/*global define */
/*global $*/
/**
 * pcCarousel Directive - Property Images With Preview used on Property Details
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    'use strict';

    app.directive("pcCarousel", function () {

        return {
            restrict : "E",
            templateUrl : "./modules/property-details/directives/carousel.html",
            scope : {
                imagesSrc   : "="
            },
            link : function (scope) {
                scope.currentImg = "";

                scope.initCarousel = function () {
                    var propertyCarousel =
                            $(".property-img-carousel .owl-carousel"),
                        carouselItems = $(".property-img-carousel .item"),
                        nextNav = $(".property-img-carousel .next"),
                        prevNav = $(".property-img-carousel .prev");

                    propertyCarousel.owlCarousel({
                        items : 4,                  // 4 items above 1199px
                        itemsDesktop : [1199, 4],    // 4 items above 991
                        itemsDesktopSmall : [991, 4],// 4 items above 767
                        itemsTablet: [767, 4],       // 4 items above 479
                        itemsMobile : [479, 3],      // 3 items below 480px
                        slideSpeed: 500,
                        autoPlay: false
                    });

                    // Activate First Image
                    scope.currentImg = scope.imagesSrc[0].image;

                    // Get src for item that hasClass .active & update scope 
                    scope.updatePreview = function () {
                        //Use the commented code to use thumbs
                        //scope.currentImg =
                            // $('.item.active img').attr('large-src');
                        scope.currentImg = $(".item.active img").attr("src");
                        scope.$apply();
                    };

                    // Active Thumb State
                    carouselItems.on('click', function () {
                        carouselItems.removeClass('active');
                        $(this).addClass('active');
                    });

                    // Set Active Class & Show next item
                    nextNav.on('click', function () {
                        propertyCarousel.trigger('owl.next');

                        // jQuery select Next Item
                        var nextItem = $('.property-img-carousel .item.active')
                            .parent().next().children('.item');

                        // jQuery if last item, make first Active
                        if (nextItem.length === 0) {
                            carouselItems.removeClass('active');
                            $('.property-img-carousel .first')
                                .addClass('active');
                        } else {
                            nextItem.addClass('next');
                            carouselItems.removeClass('active');
                            $('.item.next')
                                .addClass('active').removeClass('next');
                        }

                        scope.updatePreview();
                    });

                    prevNav.on('click', function () {
                        propertyCarousel.trigger('owl.prev');

                        // Set Active Class & Show Prev item
                        var prevItem = $('.property-img-carousel .item.active')
                            .parent().prev().children('.item');

                        // jQuery if first item, make last Active
                        if (prevItem.length === 0) {
                            carouselItems.removeClass('active');
                            $('.property-img-carousel .last')
                                .addClass('active');
                        } else {
                            prevItem.addClass('prev');
                            carouselItems.removeClass('active');
                            $('.item.prev')
                                .addClass('active')
                                .removeClass('prev');
                        }

                        scope.updatePreview();
                    });
                };

                scope.setCurrentImg = function (imgSrc) {
                    scope.currentImg = imgSrc;
                };

                scope.$watch('imagesSrc', function () {
                    if (scope.imagesSrc !== undefined) {
                        scope.initCarousel();
                    }
                });
            }
        };
    });
});