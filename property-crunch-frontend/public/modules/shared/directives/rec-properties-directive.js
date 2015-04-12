/*global define */
/*global $*/
/**
 * pcRecProperties - Recommeded Properties Carousel Directive
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcRecProperties", ["RecPropertyService", "$timeout",
        function (RecPropertyService, $timeout) {

            return {
                restrict : "E",
                templateUrl : "./modules/shared/directives/rec-properties.html",
                link : function (scope) {
                    scope.recProperties = {};
                    scope.swipeAlert = true;
                    
                    /**
                    *  Set up Carousel
                    */
                    scope.initCarousel = function () {
                        var propertyCarousel = $('.recommended-carousel .owl-carousel'),
                            nextNav = $(".recommended-carousel .next"),
                            prevNav = $(".recommended-carousel .prev");

                        propertyCarousel.owlCarousel({
                            items : 4,                  // 4 items above 1199px
                            itemsDesktop : [1199, 3],    // 3 items above 991px 
                            itemsDesktopSmall : [991, 2],// 2 items above 767px
                            itemsTablet: [767, 2],       // 2 items above 479px
                            itemsMobile : [479, 1],      // 1 item below 480px
                            slideSpeed: 500,
                            autoPlay: false
                        });

                        // Custom Navigation Events
                        nextNav.on('click', function () {
                            propertyCarousel.trigger('owl.next');
                        });

                        prevNav.on('click', function () {
                            propertyCarousel.trigger('owl.prev');
                        });
                    };

                    /**
                    * Turns off Swipe Alert
                    */
                    scope.swipeAlertOff = function () {
                        var car = $(".recommended-carousel");
                        car.on('click', function () {
                            scope.swipeAlert = false;
                        });
                    };
                    
                    /**
                    * Loads data from the Server
                    */
                    scope.loadRecProperties = function (data) {
                        if (data.data.length > 0) {
                            scope.recProperties.status = true;
                            scope.recProperties.list = data.data;
                            RecPropertyService.cacheResults(data);
                        } else {
                            scope.recProperties.status = false;
                        }
                    };
                    
                    /**
                    * Loads data from Cache
                    */
                    scope.loadCache = function () {
                        scope.recProperties.status = true;
                        // Letting the Current $digest finish before making
                        // changes and applying to the $scope
                        $timeout(function() {
                            scope.recProperties.list = RecPropertyService.results.data;
                            scope.$apply();
                        }, 0);
                    };

                    /**
                    * Get Reccomended Property Data from Service
                    */
                    scope.getRecProperties = function () {
                        if (RecPropertyService.getCache().hasOwnProperty("data")) {
                            scope.loadCache();
                        } else {
                            RecPropertyService.getRecProperties()
                                .success(scope.loadRecProperties);
                        }
                    };

                    /**
                    *  Init Get Reccomended Properties
                    */
                    scope.getRecProperties();
                    scope.swipeAlertOff();
                    
                    
                    /**
                    *  Init Carousel once Data has been loaded from the Service
                    */
                    scope.$watch('recProperties.list', function () {
                        if (scope.recProperties.list !== undefined) {
                            scope.initCarousel();
                        }
                    });
                }
            };
        }]);
});