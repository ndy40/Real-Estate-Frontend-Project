/*global define */
/**
 * SearchController 
 */
define(["./module"], function (app) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope",
        function ($scope) {

            $scope.searchObject = {keywords : ""};

            //Search for property
            $scope.searchProperty = function () {
//                alert("Search Here" + SearchService.getKeywords());
            };

            // watch for changes in keyword and perform Ajax AutoComplete
            $scope.$watch("searchObject.keywords", function (newValue, oldValue) {
//                SearchService.setKeyword(newValue);
            });

        }]);
});



