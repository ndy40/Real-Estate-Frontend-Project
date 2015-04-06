/*global define */
/**
 * Property Controller
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("PropertyCtrl", ["$scope", "$rootScope", "UserModel",
        "SearchService", "$routeParams", "$location", "emailService", 
            "propertyService", "$cookieStore", function ($scope, $rootScope,
                UserModel, SearchService, $routeParams, $location, emailService,
                    propertyService, $cookieStore) {

        /**
        * Object to Store Property Data
        */
        $scope.property = {
            details         : {},
            status          : false,
            errorStatus     : false,
            statusMsg       : "Loading Details.. Please Wait",
            errorMsg        : "",
            avgPrice        : {    // Used for Value Comparison
                data        : "",
                status      : false,
                statusMsg   : "Loading Market Difference..",
                errorStatus : false,
                errorMsg    : ""    // Used to display error msgs
            },
            priceHistory    : {     // Used for Historical Price Difference
                data        : "",
                diff        : "",
                status      : false,
                statusMsg   : "Loading Price Changes..",
                errorStatus : false,
                errorMsg    : ""    // Used to display error msgs
            },   
            comparables     : {
                list: {},
                title       : "",
                status      : false,
                statusMsg   : "Loading Comparables. Please Wait..",
                errorStatus : false,
                errorMsg    : ""    // Used to display error msgs
            }
        };
        
        /**
        * Object to Store Tour Data
        */
        $scope.pageTour = {
            noTour  : $cookieStore.get("noTour")
        };
        
        /**
        * Start Page Tour
        */
        $scope.startTour = function() {
            if (!$scope.pageTour.noTour) { 
                $scope.$broadcast("runTour");
            }
        };
        
        /**
        * Get Page Id from URL and Set New Page Route
        */
        $scope.setPageRoute = function () {
            $scope.propertyId = $routeParams.id;
        };
        
        /**
        * Get Property Details
        */
        $scope.getPropertyDetails = function () {
            propertyService.getProperty($routeParams.id)
                .success($scope.loadPropertyDetails)
                .error(function (error) {
                    $scope.property.errorStatus = true;
                    $scope.property.errorMsg = 'Unable to load data: ' +
                        error.message;
                    $scope.property.status = false;
                });
        };
        
        $scope.loadPropertyDetails = function (data) {
            $scope.property.details = data;
            $scope.getAvgPrice(data.post_code_id, data.rooms, data.type_id);
            $scope.getPriceHistroy(data.id);
            $scope.property.comparables.title = data.rooms + " Bedroom " +
                data.type + " for Sale";
            $scope.getComparables(data.id);
            $scope.populateRqstDetailsData(data);
            $scope.populateEmailFriendData(data);
            $scope.property.errorStatus = false;
            $scope.property.status = true;
            $scope.startTour();
        };
        
        // Get Average Price from Service
        $scope.getAvgPrice = function (postCode, rooms, type) {
            propertyService.getAvgPrice(postCode, rooms, type)
                .success(function (data) {
                    $scope.property.avgPrice.data = data.data;
                    $scope.property.avgPrice.errorStatus = false;
                    $scope.property.avgPrice.status = true;
                })
                .error(function () {
                    $scope.property.avgPrice.errorStatus = true;
                    $scope.property.avgPrice.errorMsg =
                        'Unable to get market data';
                    $scope.property.avgPrice.status = false;
                });
        };
        
        // Get Price History from Service
        $scope.getPriceHistroy = function (id) {
            propertyService.getPriceHistroy(id)
                .success(function (data) {
                    if (data.data.hasOwnProperty('data')) {
                        $scope.property.priceHistory.data = data.data;
                        $scope.property.priceHistory.errorStatus = false;
                        $scope.property.priceHistory.status = true;
                    } else {
                        $scope.property.priceHistory.errorStatus = true;
                        $scope.property.priceHistory.errorMsg =
                            'No price history';
                        $scope.property.priceHistory.status = false;
                    }
                })
                .error(function () {
                    $scope.property.priceHistory.errorStatus = true;
                    $scope.property.priceHistory.errorMsg =
                        'Unable to get historical data';
                    $scope.property.priceHistory.status = false;
                });
        };
        
        /**
        * Get Comparables for Current Property
        */
        $scope.getComparables = function (id) {
            propertyService.getComparables(id)
                .success(function (data) {
                    $scope.property.comparables.list = data;
                    $scope.property.comparables.errorStatus = false;
                    $scope.property.comparables.status = true;
                })
                .error(function () {
                    $scope.property.comparables.errorStatus = true;
                    $scope.property.comparables.errorMsg =
                        'Unable to get comparables';
                    $scope.property.comparables.status = false;
                });
        };

        /**
        * Object to Store Email Data
        */
        $scope.email  = {
            toFriend : {
                name            : "",
                email           : "",
                friendsEmail    : "",
                msg             : "I thought you might want to take a look at" +
                    " this property for sale on thenello.com",
                propertyTitle   : "",
                propertyImg     : "",
                propertyPrice   : ""
            },
            requestDetails : {
                name        : "",
                email       : "",
                phone       : "",
                msg         : "",
                agencyName  : "",
                agencyPhone : "",
                propertyId  : ""
            }
        };
        
        /**
        * Populate Email Data for Request Details & Email a Friend
        */
        $scope.populateRqstDetailsData = function(data) {
            $scope.email.requestDetails.agencyName = data.marketer;
            $scope.email.requestDetails.agencyPhone = data.phone;
            $scope.email.requestDetails.propertyId = data.id;
            $scope.email.requestDetails.msg = "Hi, I found your listing on " +
                "thenello.com. Please send me more information about " +
                    data.address + ". Thank you.";
        };
        $scope.populateEmailFriendData = function(data) {
            $scope.email.toFriend.propertyTitle = data.rooms +
                ' bed property for Sale at ' + data.address;
            $scope.email.toFriend.propertyImg = data.images[0].image;
            $scope.email.toFriend.propertyPrice = data.price;
        };
        
        /**
        * Send Emails - Request Details & Email a Friend
        */
        $scope.emailRequestDetails = function() {
            emailService.updateRequestDetails($scope.email.requestDetails);
        };
        
        $scope.emailFriend = function() {
            emailService.updateToFriend($scope.email.toFriend);
        };
        
        /**
        * Add Property To Favourites
        */
        $scope.addToFavourites = function(propertyId) {
            if (UserModel.userId !== null) {
                UserModel.addToFav(propertyId)
                    .success(function() {
                        UserModel.addToFavFE(propertyId);
                        $rootScope.$broadcast("favUpdated");
                    });
            } else {
                // Send to Login Page
                $location.path("/sign/in");
            }
        };
         
        $scope.$on("favUpdated", function () {
            if ($scope.favUpdate) {
                $scope.favUpdate = false;
            } else {
                $scope.favUpdate = true;
            }
        });

        $scope.init = function () {
            $scope.getPropertyDetails();
            $scope.setPageRoute();
        };
        
        $scope.init();
    }]);
});