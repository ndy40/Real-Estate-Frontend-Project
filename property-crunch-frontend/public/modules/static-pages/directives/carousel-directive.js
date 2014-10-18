/**
 * Custom Carousel Directive
 */
define(["../module"], function (app) {
    app.directive("carousel", function ($window, $document) {
        'use strict';
		
        return {
            restrict : "EA",
            scope : {
                imagesSrc   : "=",
                ngStyle     : "=",
                callback    : "="
            },
            
            templateUrl : "./modules/static-pages/directives/carousel.html",
            link : function (scope, element, attr) {
                
                var testWidth = 234;
                
                scope.itemStyle = {
                    'width': testWidth+'px'
                };
                
                
                scope.winWidth = angular.element($window).innerWidth;
                scope.dirWidth = element[0].offsetWidth;
               
                console.log(document.querySelectorAll('.no-bullets').offsetWidth);
                
                //Init Smartphone Devices Layout
                if (scope.dirWidth < 768) {
                } 
                
                //Init Tablet Devices Layout
                else if (scope.dirWidth > 767 && scope.dirWidth < 992) {
                }
                
                //Init Desktop Devices Layout
                else if (scope.dirWidth > 991)  {
                }
                
                angular.element($window).bind('resize', function () {
                    console.log(element[0].offsetWidth);
                    // Mobile
                    
                    // Tablet
                    
                    // Desktop
                    
                    //Selecting Parent Element 
                    //element[0].style.background = "red";
                    
                    
                    //Get Parent width
                    //element[0].offsetWidth
                    
                    //Selecting child
                    //element.find('li').css({
//                        position: 'relative',
//                        border: '1px solid red'
//                    });
                    //console.log($window.innerWidth);
                });
                
                
                // JS Way
                //window.onresize = function() {
//                //console.log(clientWidth);
//                    console.log(window.innerWidth);
//                    console.log(element.innerWidth);
//
//
//                };
            }
         };
    });
});

