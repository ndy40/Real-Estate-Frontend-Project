/*global define */
/**
 * SearchController 
 */
define(["./module"], function (app) {
    'use strict';
    app.controller("SearchFormCtrl", ["$scope", "SearchService",
        function ($scope, SearchService) {

            $scope.searchObject = {
				keywords : "",
				properties : [],
				status:	""
			};
    
			$scope.getProperties = function() {
				SearchService.setKeyword($scope.searchObject.keywords);
				SearchService.getResults()
					.success(function (results) {
						$scope.searchObject.properties = results.data;
					})
					.error(function (error) {
						$scope.searchObject.status = 'Unable to load data: ' + error.message;
					});
			};
			
			$scope.getProperties();

           
        }]);
});



