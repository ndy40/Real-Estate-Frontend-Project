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
                    })
                    .error(function (error) {
                        $scope.confirmation.error = true;
                    });
            } else {
                $scope.confirmation.status = false;
            }
        };
        
        $scope.confirmAccount();
       
    }]);
});