/**
 * Property Controller
 */
(function (define) {

    define(["./module"], function (app) {
        'use strict';
        app.controller("PropertyCtrl", ["$scope", "SearchService", "$routeParams", function ($scope, SearchService, $routeParams) {
            
             /**
             * Object to Store Property Data
             */
            $scope.property = {
                details: [], 
                status: false, 
            }
            
            $scope.setPageRoute = function() {
                $scope.propertyId = $routeParams.id;
            };
            
            $scope.getPropertyDetails = function () {
                SearchService.getProperty(389)
                    .success($scope.loadPropertyDetails)
                    .error(function (error) {
                        $scope.property.status = 'Unable to load data: ' + error.message;
                    });
                
                
                if ($scope.propertyDetails !== undefined) {
                    $scope.getFirstListedDate($scope.propertyDetails.created_at);
                };
            };
            
            $scope.loadPropertyDetails = function (data) {		
                $scope.searchObject.properties = data.data;
                
                if (data.length > 0) {
                    $scope.property.status = true;
                } else {
                    $scope.property.status = false;
                }
			
            };
            
            $scope.getFirstListedDate = function (date) {
                var dateTimeSplit = date.split(" "),
                    dateParts        = dateTimeSplit[0].split("-"),
                    createdYear      = dateParts[0],
                    createdMonth     = dateParts[1]-1,
                    createdDay       = dateParts[2],
                    createdDate      = new Date(createdYear, createdMonth, createdDay),
                    currentDate      = new Date(),
                    firstListedHours = (currentDate.valueOf() - createdDate.valueOf())/3600000;
                
                if (firstListedHours < 1) {
                    $scope.propertyDetails.firstListed = "less than an hour ago";
                } else if (firstListedHours < 24) {
                    $scope.propertyDetails.firstListed = firstListedHours+" hours ago";
                } else if (firstListedHours < 168) {
                    $scope.propertyDetails.firstListed = Math.floor(firstListedHours/24)+" day(s) ago";
                } else if (firstListedHours < 720) {
                    $scope.propertyDetails.firstListed =  Math.floor(firstListedHours/168)+" week(s) ago";
                }  else if (firstListedHours < 8760) {
                    $scope.propertyDetails.firstListed =  Math.ceil(firstListedHours/720)+" month(s) ago";
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



