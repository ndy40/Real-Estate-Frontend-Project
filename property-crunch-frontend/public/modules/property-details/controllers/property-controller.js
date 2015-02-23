/*global define */
/**
 * Property Controller
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("PropertyCtrl", ["$scope", "$rootScope", "UserModel",
        "SearchService", "$routeParams", "$location", "emailService",
            function ($scope, $rootScope, UserModel, SearchService,
                $routeParams, $location, emailService) {

        /**
        * Object to Store Property Data
        */
        $scope.property = {
            details: {},
            status: false
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

        $scope.setPageRoute = function () {
            $scope.propertyId = $routeParams.id;
        };

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
            // Populate Email Data for Request Details & Email Friend
            $scope.populateRqstDetailsData(data);
            $scope.populateEmailFriendData(data);
            // Get Comparables
            $scope.getComparables(data.address);
            // Set Status
            if (data.length > 0) {
                $scope.property.status = true;
            } else {
                $scope.property.status = false;
            }
        };
        
        // Populate Email Data for Request Details
        $scope.populateRqstDetailsData = function(data) {
            $scope.email.requestDetails.agencyName = data.marketer;
            $scope.email.requestDetails.agencyPhone = data.phone;
            $scope.email.requestDetails.propertyId = data.id;
            $scope.email.requestDetails.msg = "Hi, I found your listing on nello. Please send me more information about " + data.address + ". Thank you.";
        };
        
        // Populate Email Data for Email a Friend
        $scope.populateEmailFriendData = function(data) {
            $scope.email.toFriend.propertyTitle = data.rooms +
                ' bed property for Sale at ' + data.address;
            $scope.email.toFriend.propertyImg = data.images[0].image;
            $scope.email.toFriend.propertyPrice = data.price;
        };
        
        // Send Request Details Email
        $scope.emailRequestDetails = function() {
            emailService.updateRequestDetails($scope.email.requestDetails);
        };

        // Send Email a Friend Email
        $scope.emailFriend = function() {
            emailService.updateToFriend($scope.email.toFriend);
        };

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

        // Calculate First Listed (Days Ago) - Create Directive Later
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