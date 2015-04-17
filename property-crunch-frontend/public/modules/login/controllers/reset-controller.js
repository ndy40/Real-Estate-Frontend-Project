/*global define */
/**
 * Reset Password Controller for Investor Accounts
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("ResetCtrl", ["$scope", "$routeParams", "$location",
            'ResetService', function ($scope, $routeParams, $location,
                ResetService) {
        
        $scope.requestReset = {
           email    : "",
           status   : false,
           error    : false,
           formError: false
        };
        
        $scope.resetPass = {
            code        : null,
            newPass     : "",
            confirmPass : "",
            dontMatch   : false,
            status      : false,
            error       : false,
            formError   : false
        };
        
        /**
        * Send an Email to reset the password
        */
        $scope.requestReset = function () {
            // Check any validation errors
            if ($scope.requestResetForm.$valid) {
                $scope.requestReset.formError = false;
                $('#email_sent').modal();
                // Send Request New Password Email & Update View
                ResetService.requestReset($scope.requestReset.email)
                    .success(function (data) {
                        $scope.requestReset.status = true;
                        $scope.requestReset.error = false;
                    })
                    .error(function (error) {
                        $scope.requestReset.error = true;
                        $scope.requestReset.status = false;
                    });
            } else {
                // Validation Failed
                $scope.requestReset.formError = true;
            }
        };
        
        /**
        * Get Pass Code from Route Params
        */
        $scope.getNewPassCode = function () {
            if ($routeParams.code !== undefined) {
                $scope.resetPass.code = $routeParams.code;
            }
        };
        
        $scope.getNewPassCode();
        
        /**
        * Check if Passwords Match
        */
        $scope.matchPass = function () {
            if ($scope.resetPass.newPass !== $scope.resetPass.confirmPass) {
                $scope.resetPass.dontMatch = true;
            } else {
                $scope.resetPass.dontMatch = false;
            }
        };
        
        $scope.setNewPass = function () {
            $scope.matchPass();
            // Check any validation errors
            if ($scope.resetPassForm.$valid && !$scope.resetPass.dontMatch) {
                $scope.requestReset.formError = false;
                $('#reset_success').modal();
                // Check if PassCode is there
                if ($scope.resetPass.code !== null) {
                    ResetService.resetPass($scope.resetPass.code)
                        .success(function (data) {
                            $scope.resetPass.status = true;
                        })
                        .error(function (error) {
                            $scope.resetPass.error = true;
                        });
                } else {
                    // No Pass Code in RouteParms - Throw Error
                    $scope.resetPass.status = false;
                    $scope.resetPass.error = true;
                }
            } else {
                // Validation Failed
                $scope.resetPass.formError = true;
            }
        };
       
    }]);
});