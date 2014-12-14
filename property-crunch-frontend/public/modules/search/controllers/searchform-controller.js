/*global define */
/**
 * Search Form Controller for the PCAPPSEARCH Module
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService", 
        function ($scope, SearchService) {
            /**
             * Object to Store Search Data
             */
            $scope.searchObject = {
                properties: [],         // To store Properties
                count: "",
                status: false,          // Setting Search Status
                defaultStatus: false    // Setting Default Properties Statues
            };
            
            /**
             * Object to Store Infinite Scroll Status
             */
            $scope.infiniteStatus = {
                busy : true,
                last : false
            };
            
            $scope.advancedSearchStatus = false;
            
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
                if (SearchService.results.hasOwnProperty("data")) {
                    $scope.loadPropertyTable(SearchService.getCache());
                    $scope.searchObject.keywords = SearchService.getKeywords();
                } else {
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
                if (data.hasOwnProperty("data") &&  data.data.length > 0) {
                    $scope.searchObject.status = true;
                    $scope.searchObject.defaultStatus = false;
                    $scope.searchObject.properties = data.data;
                    $scope.searchObject.count = data.count;
                    // Cache Results
                    SearchService.cacheResults(data);
                    $scope.infiniteStatus.busy = false;
                } else {
                    $scope.searchObject.status = false;
                    $scope.getDefaultProperties();
                }
            };
            
            $scope.getDefaultProperties = function () {
                SearchService.setKeyword("london");
                SearchService.getResults()
                        .success($scope.loadDefaultTable);
            };
            
            $scope.loadDefaultTable = function (data) {
                $scope.searchObject.defaultStatus = true;
                $scope.searchObject.properties = data.data;
                $scope.searchObject.count = data.count;
                $scope.infiniteStatus.busy = false;
            };
            
            /**
            * Init getProperties
            */
            $scope.getProperties();
            
            
            $scope.advanceSearch = function() {
                $scope.infiniteStatus.busy = true;
                $scope.advancedSearchStatus = true;
            };
            
            $scope.closeAdvancedSearch = function() {
                $scope.getProperties();
                $scope.infiniteStatus.busy = false;
                $scope.advancedSearchStatus = false;
            };
            
            
            /**
            * Infinite Properties on Mobile
            */
            $scope.nextPage = function () {
                if (!$scope.infiniteStatus.busy) {
                    $scope.infiniteStatus.busy = true;
                    if (!$scope.infiniteStatus.last) {
                        // Increment Page Num
                        SearchService.setCurrentPage(SearchService.getCurrentPage()+1);
                        // Get Results for The Next Page
                        SearchService.getResults().success(function(data) {
                            if (data.data.length > 0) {
                                $scope.searchObject.properties =
                                    $scope.searchObject.properties.concat(data.data);
                                $scope.infiniteStatus.busy = false;
                            } else {
                                $scope.infiniteStatus.busy = false;
                                $scope.infiniteStatus.last = true;
                            }
                        }.bind(this));
                    }
                }
            };
            
        }]);
});
