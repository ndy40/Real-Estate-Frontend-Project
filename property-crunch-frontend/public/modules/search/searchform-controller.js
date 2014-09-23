/*global define */
/**
 * SearchController 
 */
define(["./module"], function (app, angular) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService",
        function ($scope, SearchService) {

            $scope.searchObject = {
                keywords: "london",
                properties: [],
                status: false,
                filter : {},
                pager  : {}
            };
            
            /**
             * Loads data onto the results table. 
             * @param Object data
             * @returns {undefined}
             */
            $scope.loadPropertyTable = function (data) {
                if (data.data.length > 0) {
                    $scope.searchObject.status = true;
                } else {
                    $scope.searchObject.status = false;
                }
                $scope.searchObject.properties = data.data;
                $scope.searchObject.pager = {
                    count : data.count,
                    size  : data.size,
                    page  : data.page
                };
                
            };

            $scope.getProperties = function () {
                var cache = SearchService.getCache();
                if (SearchService.getResults().hasOwnProperty("data")) {
                    $scope.loadPropertyTable(SearchService.getCache());
                    $scope.searchObject.keywords = SearchService.getKeywords();
                } else {
                    SearchService.setKeyword($scope.searchObject.keywords);
                    SearchService.getResults()
                        .success($scope.loadPropertyTable)
                        .error(function (error) {
                            $scope.searchObject.status = 'Unable to load data: ' + error.message;
                        });
                }
            };
            
            $scope.$watch($scope.searchObject.properties, function (newVal, oldVal) {
                if (newVal.lenth > 0) {
                    $scope.searchObject.status = true;
                }
            });
           
            $scope.getProperties();
        }]);
});



