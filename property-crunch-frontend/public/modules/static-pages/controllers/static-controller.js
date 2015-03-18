/*global define */
/**
 * Static Controller
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("StaticCtrl", ["$scope", "$routeParams",
        function ($scope, $routeParams) {
            
            /**
             * Custom Routing Views for Static Pages
             */
            $scope.routePage = function() {
                switch ($routeParams.pageName) {
                    case '404':
                    case 'browser-update':
                    case 'feedback':
                    case 'home':
                    case 'learn_more':
                    case 'list_property':
                    case 'privacy_policy':
                    case 'terms_of_use':
                        $scope.pageName = $routeParams.pageName;
                        break; 
                    default:
                        $scope.pageName = '404';
                        break;    
                } 
            };
            
            $scope.routePage();
            
//            $scope.pageName = $routeParams.pageName;

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

        }]);
});