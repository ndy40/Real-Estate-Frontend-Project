/*global define */
/**
 * Static Controller
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("StaticCtrl", ["$scope", "$routeParams",
        function ($scope, $routeParams) {

            /**
             * To Store Page Name for Routing Views
             */
            $scope.pageName = $routeParams.pageName;

            /**
             * Accordion Data for Learn More Page
             */
            $scope.accordion = {
                status: {
                    first: true,
                    second: false,
                    third:  false,
                    fourth: false,
                    fifth:  false,
                    sixth:  false,
                    seventh: false,
                    eigth:  false,
                    ninth:  false,
                    tenth:  false,
                    eleventh: false
                }
            };

            /**
             * Cookie Policy Directive Status to Apply Styling to Home Header
             */
            $scope.cookieAlertStatus = false;

            /**
             * Testimonial Slider - Using Bootstrap UI's Carousel Directive
             */
            
            
        }]);
});