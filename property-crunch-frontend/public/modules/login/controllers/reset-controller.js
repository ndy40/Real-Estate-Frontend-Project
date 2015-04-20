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
                // Send Request New Password Email & Update View
                ResetService.requestReset($scope.requestReset.email)
                    .success(function (data) {
                        $scope.requestReset.status = true;
                        $scope.requestReset.error = false;
                        $('#email_sent').modal();
                    })
                    .error(function (data) {
                        $scope.requestReset.errorMsg = data.flash;
                        $scope.requestReset.error = true;
                        $scope.requestReset.status = false;
                        $('#email_sent').modal();
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
                // Check if PassCode is there
                if ($scope.resetPass.code !== null) {
                    ResetService.resetPass($scope.resetPass)
                        .success(function (data) {
                            $scope.resetPass.status = true;
                            $scope.resetPass.error = false;
                            $('#reset_success').modal();
                        })
                        .error(function (data) {
                            $scope.resetPass.errorMsg = data.flash;
                            $scope.resetPass.status = false;
                            $scope.resetPass.error = true;
                            $('#reset_success').modal();
                        });
                }
            } else {
                // Validation Failed
                $scope.resetPass.formError = true;
            }
        };
       
    }]);
});