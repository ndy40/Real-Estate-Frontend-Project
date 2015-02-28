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
            SearchService.getProperty($routeParams.id)
                .success($scope.loadPropertyDetails)
                .error(function (error) {
                    $scope.property.status = 'Unable to load data: ' +
                        error.message;
                });
        };
        
        $scope.loadPropertyDetails = function (data) {
            $scope.property.details = data;
            $scope.property.status = true;
            $scope.getFirstListedDate(data.created_at);
            // Get Average Price from Service
            propertyService.getAvgPrice(data.post_code_id, data.rooms, data.type_id)
                .success($scope.calcMarketDiff)
                .error(function (error) {
                    $scope.property.noMarketData = true;
                });
            // Get Price History from Service
            propertyService.getPriceHistroy(data.id)
                .success($scope.calcHistoryDiff)
                .error(function (error) {
                    $scope.property.noHistoryData = true;
                });
            
            // Populate Email Data for Request Details & Email Friend
            $scope.populateRqstDetailsData(data);
            $scope.populateEmailFriendData(data);
            // Get Comparables
            //$scope.getComparables(data.address);
            // Set Status
            if (data.length > 0) {
                $scope.property.status = true;
            } else {
                $scope.property.status = false;
            }
        };
        
        $scope.calcMarketDiff = function (data) {
            $scope.property.noMarketData = false;
            $scope.property.avgPrice = data.data;
            $scope.property.marketDiff = 
                ($scope.property.details.price - $scope.property.avgPrice) /
                    $scope.property.avgPrice * 100;
            
            console.log($scope.property.marketDiff);
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
        * Get Comparables for Current Property
        */
        $scope.getComparables = function (location) {
            //SearchService.getComparables(location) - Use Later
            SearchService.getComparables("SW7")
                .success($scope.loadComparablesList)
                .error(function (error) {
                    $scope.comparables.status = 'Unable to load data: ' +
                        error.message;
                });
        };
        $scope.loadComparablesList = function (data) {
            $scope.comparables.list = data.data;
            // Set Status
            if (data.length > 0) {
                $scope.comparables.status = true;
            } else {
                $scope.comparables.status = false;
            }
        };

        
        /**
        * Calculate First Listed (Days Ago) - Create Directive/ Filter 
        */
        $scope.getFirstListedDate = function (created_at) {
            var dateTimeSplit = created_at.split(" "),
                dateParts = dateTimeSplit[0].split("-"),
                createdYear = dateParts[0],
                createdMonth = dateParts[1] - 1,
                createdDay = dateParts[2],
                createdDate = new Date(createdYear, createdMonth, createdDay),
                currentDate = new Date(),
                firstListedHours = (currentDate.valueOf() -
                    createdDate.valueOf()) / 3600000;

            if (firstListedHours < 1) {
                $scope.property.firstListed = "less than an hour ago";
            } else if (firstListedHours < 24) {
                $scope.property.firstListed = firstListedHours + " hours ago";
            } else if (firstListedHours < 168) {
                $scope.property.firstListed = Math.floor(firstListedHours / 24)
                    + " day(s) ago";
            } else if (firstListedHours < 720) {
                $scope.property.firstListed =  Math.floor(firstListedHours /
                    168) + " week(s) ago";
            } else if (firstListedHours < 8760) {
                $scope.property.firstListed =  Math.ceil(firstListedHours /
                    720) + " month(s) ago";
            }
        };

        $scope.init = function () {
            $scope.getPropertyDetails();
            $scope.setPageRoute();
        };

        $scope.init();
        
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
    }]);
});