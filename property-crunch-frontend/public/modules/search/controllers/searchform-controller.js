/*global define */
/**
 * Search Form Controller for the pcSearch Module
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "$rootScope", "UserModel", 
        "SearchService", "$location", '$http', function ($scope, $rootScope,
            UserModel, SearchService, $location, $http) {

            /**
             * Object to Store Search Data
             */
            $scope.searchObject = {
                properties: [],         // To store Properties
                count: "",              // Total Search Results
                status: false,          // Setting Search Status
                busy: true,             // Loading Status for Search
                last: false,            // Last Item in the List
                advSearchStatus: false, // Advance Search Status For Mobile 
                errorType: {            // To Determine What Error it Was
                    location: false,    // the error was due to Location
                    filters: false      // the error was due to filters
                }
            };

            /**
             * Get Properties from Search Service
             *
             * If the data is already loaded in SearchService.getResults() it
             * loads cached data and gets the previously stored keywords used to
             * Search Properties.
             *
             * If the data is not loaded previously, it uses
             * $scope.searchObject.keywords and sets the keywords in
             * SearchService.setKeyword() to be used later.
             *
             * On Success Loads Property Table Otherwise displays error in
             * $scope.searchObject.status
             */
            $scope.getProperties = function () {
                // Load Cache
                if (SearchService.results.hasOwnProperty("data")) {
                    $scope.searchObject.keywords = SearchService.getKeywords();
                    $scope.loadPropertyTable(SearchService.getCache());
                } else { // No Cache
                    // Setting Location Keyword in Service & Loading Data
                    SearchService.setKeyword($scope.searchObject.keywords);
                    SearchService.getResults()
                        .success($scope.loadPropertyTable);
                }
            };

            /**
             * Load Properties onto the results table.
             *
             * @param Object data
             * @returns {undefined}
             */
            $scope.loadPropertyTable = function (data) {
                // Search Returned Results 
                if (data.hasOwnProperty("data") &&  data.data.length > 0) {
                    $scope.searchObject.properties = data.data;
                    $scope.searchObject.count = data.count;
                    // Remove Busy Status & Errors
                    $scope.searchObject.status = true;
                    $scope.searchObject.busy = false;
                    $scope.searchObject.errorType.location = false;
                    $scope.searchObject.errorType.filters = false;
                    // Cache Results
                    SearchService.cacheResults(data);
                } else { // No Results
                    // Clear Previous Cache & Status set to false
                    SearchService.clearCache();
                    $scope.searchObject.status = false;
                    // Only test true if Location Keyword Entered
                    if ($scope.searchObject.keywords !== undefined) {
                        // Test if No Results due to the Location Entered
                        SearchService.testLocation().success(function (data) {
                            if (data.hasOwnProperty("data") &&
                                data.data.length > 0) {
                                $scope.searchObject.errorType.location = false;
                                $scope.searchObject.errorType.filters = true;
                            } else {
                                $scope.searchObject.errorType.location = true;
                            }
                        });
                    }
                }
            };
            
            /**
            * Init getProperties
            */
            $scope.getProperties();
            
            
            /**
            * Update Filters
            */
            $scope.updateFilters = function () {
                SearchService.clearCache(); // Clear Current Cache
                SearchService.setCurrentPage(1);
                $scope.getProperties();
            };

            /**
            * Update Page Number - Clears Cache and Returns Next Page Data
            */
            $scope.updatePageNum = function () {
                SearchService.clearCache(); // Clear Current Cache
                $scope.getProperties();
            };
            
            $scope.advanceSearch = function() {
                $scope.searchObject.busy = true;
                $scope.searchObject.advSearchStatus = true;
            };
            
            $scope.closeAdvancedSearch = function() {
                $scope.searchObject.busy = false;
                $scope.searchObject.advSearchStatus = false;
                $scope.updateFilters();
            };
            
            /**
            * Infinite Properties on Mobile
            */
            $scope.infiniteLoader = function () {
                if ($http.pendingRequests.length === 0 &&
                    !$scope.searchObject.busy &&
                        !$scope.searchObject.advSearchStatus &&
                            !$scope.searchObject.last) {
                    // Set Status to Busy
                    $scope.searchObject.busy = true;
                    // Increment Page Num & get Results
                    SearchService
                        .setCurrentPage(SearchService.getCurrentPage() + 1);
                    SearchService
                        .getResults().success(function(data) {
                            if (data.data.length > 0) {
                                $scope.searchObject.properties =
                                    $scope.searchObject.properties.
                                        concat(data.data);
                                $scope.searchObject.busy = false;
                                var SearchCache = {
                                    count : data.count,
                                    data : $scope.searchObject.properties
                                };
                                SearchService.clearCache();
                                SearchService.cacheResults(SearchCache);
                            } else {
                                $scope.searchObject.busy = false;
                                $scope.searchObject.last = true;
                            }
                    }.bind(this));
                }
            };

            /**
            * Add Property To Favourites
            */
            $scope.addToFavourites = function(propertyId) {
                if (UserModel.isLoggedIn) {
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
        }]);
});
