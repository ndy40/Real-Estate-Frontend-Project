/*global define */
/**
 * SearchController 
 */
define(["./module"], function (app) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService",
        function ($scope, SearchService) {

            $scope.searchObject = {
                keywords: "london",
                properties: [],
                status: ""
            };

            $scope.getProperties = function () {
                SearchService.setKeyword($scope.searchObject.keywords);
                SearchService.getResults()
                    .success($scope.loadPropertyTable)
                    .error(function (error) {
                        $scope.searchObject.status = 'Unable to load data: ' + error.message;
                    });
            };

            $scope.getProperties();
            
            $scope.loadPropertyTable = function (data) {
                if (data.data.length > 0) {
                    $scope.searchObject.properties = data.data;
                    $scope.searchObject.status = true;
                } else {
                    $scope.searchObject.status = false;
                }
                
            };
        }]);
});



