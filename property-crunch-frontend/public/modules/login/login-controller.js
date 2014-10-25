/*global define */
/**
 * Investor Login Controller
 */

define(["./module", "../nav/index"], function (app) {
    'use strict';
    app.controller("LoginCtrl", ["$scope", "$rootScope", "$location", 'AuthService', function ($scope, $rootScope, $location, AuthService) {
        //Model for holding login data
        $scope.loginData = {
            email      : "",
            password   : ""
        };
        
        $scope.registerData = {
            first_name : "",
            last_name  : "",
            email      : "",
            password   : "",
            password_confirmation : ""
        };
        
        //Submit form data for login to take place.
        $scope.login = function () {
            'use strict';
            AuthService.login(
                $scope.loginData.email,
                $scope.loginData.password,
                $scope.loginData.remember,
                function (data) {
                    if (data !== undefined) {
                        $rootScope.$broadcast("loginsuccess");
                        $location.path("/home");
                    }
                },
                function (data) {
                    $scope.alert.failedLogin = true;
                    $scope.alert.loginMessage = data.flash;
                }
            );
        };

        $scope.$on("logOut", function () {
            $rootScope.showLogin = false;
            $rootScope.user = undefined;
        });

        $scope.register = function () {
            AuthService.register(
                $scope.registerData
            ).success(function () {
                $scope.alert.success = true;
                $scope.alert.isError = false;
            }).error(function (data) {
                var messages = data.flash.split(",");
                $scope.showErrorMessage(true, messages);
                $scope.alert.success = false;
            });

        };

        $scope.showErrorMessage = function (isError, message) {
            $scope.alert.isError = isError;
            $scope.alert.errorMessage = message;
        };

        $scope.alert = {isError : false, errorMessage : "", success : false};
    }]);
});
