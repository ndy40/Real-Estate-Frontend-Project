/*global define */
/**
* NavigationCtrl for handling navigation wide changes. 
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("NavigationCtrl", ["$scope", "$rootScope", "UserModel",
        "AuthService", function ($scope, $rootScope, UserModel, AuthService) {

        UserModel.refresh();

        $rootScope.navData  = {
            fullname : UserModel.fullname,
            showLogin : UserModel.isLoggedIn,
            showLoginButton : !UserModel.isLoggedIn
        };

        $scope.logout = function () {
            UserModel.logout();
            AuthService.logout();
            $scope.$apply();
        };

        $scope.$on("loginsuccess", function (targetscope, currscope) {
            AuthService.getCurentUser($scope.modifynav);
        });

        $scope.modifynav = function (data) {
            UserModel.createSession(data);

            $rootScope.navData.fullname = UserModel.fullname;
            $rootScope.navData.showLogin = UserModel.isLoggedIn;
            $rootScope.navData.showLoginButton = false;
        };

        // Hiding Dropdown by default
        $scope.dropOpenStatus = false;

        //  Toggle Dropdown
        $scope.toggleDropdown = function () {
            $scope.dropOpenStatus = !$scope.dropOpenStatus;
        };
    }]);
});