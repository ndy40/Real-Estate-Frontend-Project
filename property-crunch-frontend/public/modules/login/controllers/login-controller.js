/*global define */
/**
 * Investor Login Controller
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("LoginCtrl", ["$scope", "$rootScope", "$routeParams",
        "$location", 'AuthService', function ($scope, $rootScope, $routeParams,
            $location, AuthService) {
        $scope.pageType = {
            login   : false,
            signup  : false
        };
        
        /**
        * Get Page Type from URL and Set Tab State
        */
        $scope.setPage = function () {
            if ($routeParams.type === "in") {
                $scope.pageType.login = true;
                $scope.pageType.signup = false;
            } else {
                $scope.pageType.login = false;
                $scope.pageType.signup = true;
            }
        };
        
        $scope.setPage();
        
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
            AuthService.login(
                $scope.loginData.email,
                $scope.loginData.password,
                $scope.loginData.remember,
                function (data) {
                    if (data !== undefined) {
                        $rootScope.$broadcast("loginsuccess");
                        $location.path("/pages/home");
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
                $location.path("/register-success");
//                $scope.alert.success = true;
//                $scope.alert.isError = false;
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