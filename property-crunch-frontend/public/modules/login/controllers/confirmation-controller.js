/*global define */
/**
 * Investor Confirmation Controller for Create Account
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("ConfirmationCtrl", ["$scope", "$routeParams", "$location",
            'ConfirmationService', function ($scope, $routeParams, $location,
                ConfirmationService) {
        
        $scope.confirmation = {};
        
        /**
        * Get Page Type from URL and Set Tab State
        */
        $scope.confirmAccount = function () {
            if ($routeParams.code !== undefined) {
                ConfirmationService.confirmAccount($routeParams.code)
                    .success(function (data) {
                        $scope.confirmation.status = true;
                        $scope.confirmation.error = false;
                    })
                    .error(function (data) {
                        $scope.confirmation.errorMsg = data.flash;
                        $scope.confirmation.status = false;
                        $scope.confirmation.error = true;
                    });
            }
        };
        
        $scope.confirmAccount();
       
    }]);
});