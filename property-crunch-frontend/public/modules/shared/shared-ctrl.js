/*
 * SharedCtrl for handling shared directives 
 */
define(["./module"], function (app) {
    'use strict';
    app.controller("sharedCtrl", ["$scope", "RecPropertyService", function ($scope, RecPropertyService) {
       
        /**
         * Object to Store Reccomended Property Data
         */
         $scope.recProperties = {
            list: {}, 
            status: false ,
            count: ""
        };
        
        $scope.getRecProperties = function () {
            if (RecPropertyService.getCache().hasOwnProperty("data")) {
                $scope.loadRecProperties(RecPropertyService.getCache());
            } else {
                RecPropertyService.getRecProperties()
                    .success($scope.loadRecProperties)
            }
        };

        /**
         * Loads data onto the loadRecProperties
         * @param Object data
         * @returns {undefined}
         */
        $scope.loadRecProperties = function (data) {
            if (data.data.length > 0) {
                $scope.recProperties.status = true;
            } else {
                $scope.recProperties.status = false;
            }
            
            $scope.recProperties.list = data.data;
            $scope.recProperties.count = data.count;
        };
        
        $scope.getRecProperties();
    }]);
});