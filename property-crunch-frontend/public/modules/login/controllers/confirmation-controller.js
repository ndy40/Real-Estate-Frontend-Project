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
        
        $scope.confirmation = {
           code     : $routeParams.code,
           status   : false,
           error    : false
        };
        
        /**
        * Get Page Type from URL and Set Tab State
        */
        $scope.confirmAccount = function () {
            ConfirmationService.confirmAccount()
                .success(function (data) {
                    $scope.confirmation.status = true;
                })
                .error(function (error) {
                    $scope.confirmation.error = true;
                });
        };
        
        $scope.confirmAccount();
       
    }]);
});