/*global define */
/**
 * Property Controller
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("PropertyCtrl", ["$scope", "$rootScope", "UserModel",
        "SearchService", "$routeParams", "$location", "emailService", 
            "propertyService", function ($scope, $rootScope, UserModel, 
                SearchService, $routeParams, $location, emailService,
                    propertyService) {

        /**
        * Object to Store Property Data
        */
        $scope.property = {
            details         : {},
            avgPrice        : "",   // Used for Value Comparison
            marketDiff      : "",   
            priceHistory    : "",   // Used for Historical Price Difference
            historyDiff     : "",
            noMarketData    : false,
            noHistoryData   : false,
            status          : false
        };
        
        /**
        * Object to Store Comparables Data
        */
        $scope.comparables = {
            list: {},
            status: false
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
                    $scope.property.status = 'Unable to load data: ' +
                        error.message;
                });
        };
        
        $scope.loadPropertyDetails = function (data) {
            $scope.property.details = data;
            $scope.property.status = true;
            $scope.getAvgPrice(data.post_code_id, data.rooms, data.type_id);
            $scope.getPriceHistroy(data.id);
            $scope.getComparables(data.id);
            // Populate Email Data for Request Details & Email Friend
            $scope.populateRqstDetailsData(data);
            $scope.populateEmailFriendData(data);
            
            // Set Status
            if (data.length > 0) {
                $scope.property.status = true;
            } else {
                $scope.property.status = false;
            }
        };
        
        // Get Average Price from Service
        $scope.getAvgPrice = function (postCode, rooms, type) {
            propertyService.getAvgPrice(postCode, rooms, type)
                .success($scope.calcMarketDiff)
                .error(function (error) {
                    $scope.property.noMarketData = true;
                });
        };
        $scope.calcMarketDiff = function (data) {
            $scope.property.noMarketData = false;
            $scope.property.avgPrice = data.data;
            $scope.property.marketDiff = 
                ($scope.property.details.price - $scope.property.avgPrice) /
                    $scope.property.avgPrice * 100;
        };
        
        // Get Price History from Service
        $scope.getPriceHistroy = function (id) {
            propertyService.getPriceHistroy(id)
                .success($scope.calcHistoryDiff)
                .error(function (error) {
                    $scope.property.noHistoryData = true;
                });
        };
        $scope.calcHistoryDiff = function (data) {
            $scope.property.priceHistory = data;
            if (data.hasOwnProperty('old_price')) {
                $scope.property.noHistoryData = false;
                $scope.property.historyDiff = data.new_price - data.old_price;
            } else {
                $scope.property.noHistoryData = true;
                $scope.property.historyDiff = 0;
            }
        };
        
        /**
        * Get Comparables for Current Property
        */
        $scope.getComparables = function (id) {
            propertyService.getComparables(id)
                .success($scope.loadComparables)
                .error(function (error) {
                    $scope.comparables.status = 'Unable to load data: ' +
                        error.message;
                });
        };
        $scope.loadComparables = function (data) {
            $scope.comparables.list = data;
            $scope.comparables.title = "4 Bedroom for Sale";
            // Set Status
            if (data.length > 0) {
                $scope.comparables.status = true;
            } else {
                $scope.comparables.status = false;
            }
        };

        /**
        * Object to Store Email Data
        */
        $scope.email  = {
            toFriend : {
                name            : "",
                email           : "",
                friendsEmail    : "",
                msg             : "I thought you might want to take a look at this property for sale on nello",
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
            $scope.email.requestDetails.msg = "Hi, I found your listing on nello. Please send me more information about " + data.address + ". Thank you.";
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
                $location.path("/login");
            }
        };

        $scope.$on("favUpdated", function (targetscope, currscope) {
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