/**
 * Static Controller
 */
(function (define) {

    define(["./module"], function (app) {
        'use strict';
        app.controller("StaticCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
            $scope.pageName = $routeParams.pageName;
            
            $scope.slider = {
                images: [
                    {
                        "id": "122",
                        "property_id": "389",
                        "image": "http://app.propertycrunch.co/assets/properties/full/389_1_08-10-2014.jpg",
                        "thumb": "http://app.propertycrunch.co/assets/properties/thumb/389_1_08-10-2014.jpg",
                        "size": null,
                        "thumb_size": null,
                        "processed": "0",
                        "enabled": "1",
                        "basename": "40e97d30343be7a27d9f1b3b756672bb7d428a6f_645_430.j"
                    },
                    {
                        "id": "123",
                        "property_id": "389",
                        "image": "http://app.propertycrunch.co/assets/properties/full/389_2_08-10-2014.jpg",
                        "thumb": "http://app.propertycrunch.co/assets/properties/thumb/389_2_08-10-2014.jpg",
                        "size": null,
                        "thumb_size": null,
                        "processed": "0",
                        "enabled": "1",
                        "basename": "5d8f19ccd786a0a081bbb609afc48e59ca6afa5f_645_430.j"
                    },
                    {
                        "id": "124",
                        "property_id": "389",
                        "image": "http://app.propertycrunch.co/assets/properties/full/389_3_08-10-2014.jpg",
                        "thumb": "http://app.propertycrunch.co/assets/properties/thumb/389_3_08-10-2014.jpg",
                        "size": null,
                        "thumb_size": null,
                        "processed": "0",
                        "enabled": "1",
                        "basename": "f1fd670b103ee2aad1c4a10e3601a9a58a16ee54_645_430.j"
                    },
                    {
                        "id": "125",
                        "property_id": "389",
                        "image": "http://app.propertycrunch.co/assets/properties/full/389_4_08-10-2014.jpg",
                        "thumb": "http://app.propertycrunch.co/assets/properties/thumb/389_4_08-10-2014.jpg",
                        "size": null,
                        "thumb_size": null,
                        "processed": "0",
                        "enabled": "1",
                        "basename": "6304312253373710b0fd64a49e086e809ca48451_645_430.j"
                    },
                    {
                        "id": "126",
                        "property_id": "389",
                        "image": "http://app.propertycrunch.co/assets/properties/full/389_5_08-10-2014.jpg",
                        "thumb": "http://app.propertycrunch.co/assets/properties/thumb/389_5_08-10-2014.jpg",
                        "size": null,
                        "thumb_size": null,
                        "processed": "0",
                        "enabled": "1",
                        "basename": "4df62ae588d834bcb5e66dc1e740758f109cfbb0_645_430.j"
                    },
                    {
                        "id": "127",
                        "property_id": "389",
                        "image": "http://app.propertycrunch.co/assets/properties/full/389_6_08-10-2014.jpg",
                        "thumb": "http://app.propertycrunch.co/assets/properties/thumb/389_6_08-10-2014.jpg",
                        "size": null,
                        "thumb_size": null,
                        "processed": "0",
                        "enabled": "1",
                        "basename": "5f08cdcbe7a06f5eb63736b5f77f5bc16f9a3de0_645_430.j"
                    }
                ],
                
                wrapper: {}
                
            }; 
            
            
            
        }]);
    });
})(define);



