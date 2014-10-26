/**
 * Property Controller
 */
(function (define) {

    define(["./module"], function (app) {
        'use strict';
        app.controller("PropertyCtrl", ["$scope", "SearchService", "$routeParams", "$location", function ($scope, SearchService, $routeParams, $location) {
            
             /**
             * Object to Store Property Data
             */
            $scope.property = {
                details: {}, 
                status: false 
            };
            
             /**
             * Object to Store Property Data
             */
             $scope.comparables = {
                list: {}, 
                status: false 
            };
            
            $scope.setPageRoute = function() {
                $scope.propertyId = $routeParams.id;
            };
            
            $scope.getPropertyDetails = function () {
                SearchService.getProperty($routeParams.id)
                    .success($scope.loadPropertyDetails)
                    .error(function (error) {
                        $scope.property.status = 'Unable to load data: ' + error.message;
                    });
            };
            
            $scope.loadPropertyDetails = function (data) {		
                $scope.property.details = data;
                $scope.getFirstListedDate(data.created_at);
                
                // Get Comparables
                $scope.getComparables(data.address);
                
                // Set Status
                if (data.length > 0) {
                    $scope.property.status = true;
                } else {
                    $scope.property.status = false;
                }
                
            };
            
            $scope.getComparables = function (location) {
                //SearchService.getComparables(location)
                SearchService.getComparables("SW7")
                    .success($scope.loadComparablesList)
                    .error(function (error) {
                        $scope.comparables.status = 'Unable to load data: ' + error.message;
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
                    dateParts        = dateTimeSplit[0].split("-"),
                    createdYear      = dateParts[0],
                    createdMonth     = dateParts[1]-1,
                    createdDay       = dateParts[2],
                    createdDate      = new Date(createdYear, createdMonth, createdDay),
                    currentDate      = new Date(),
                    firstListedHours = (currentDate.valueOf() - createdDate.valueOf())/3600000;
                
                if (firstListedHours < 1) {
                    $scope.property.firstListed = "less than an hour ago";
                } else if (firstListedHours < 24) {
                    $scope.property.firstListed = firstListedHours+" hours ago";
                } else if (firstListedHours < 168) {
                    $scope.property.firstListed = Math.floor(firstListedHours/24)+" day(s) ago";
                } else if (firstListedHours < 720) {
                    $scope.property.firstListed =  Math.floor(firstListedHours/168)+" week(s) ago";
                }  else if (firstListedHours < 8760) {
                    $scope.property.firstListed =  Math.ceil(firstListedHours/720)+" month(s) ago";
                }
            };
            
           
            $scope.init = function() {
                $scope.getPropertyDetails();
                $scope.setPageRoute();
            };
            
            $scope.init();
            
        }]);
    });
})(define);



