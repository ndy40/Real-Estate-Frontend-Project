/*global define */
/**
* NavigationCtrl for handling navigation wide changes. 
 */
define(["../module"], function (app) {
    'use strict';
    app.controller("NavigationCtrl", ["$scope", "$rootScope", "UserModel",
        "AuthService", function ($scope, $rootScope, UserModel, AuthService) {

        $rootScope.navData  = {
            isLoggedIn : UserModel.isLoggedIn,
            fullname : UserModel.fullname,
            favCount : UserModel.favCount
        };
        
        $scope.logout = function () {
            UserModel.logout();
        };

        $scope.$on("loginsuccess", function () {
            AuthService.getCurentUser($scope.modifynav);
        });
        
        $scope.$on("favUpdated", function () {
            $rootScope.navData.favCount = UserModel.favCount;
        });

        $scope.modifynav = function (data) {
            UserModel.createSession(data);
            $rootScope.navData.isLoggedIn = UserModel.isLoggedIn;
            $rootScope.navData.fullname = UserModel.fullname;
            $rootScope.navData.favCount = UserModel.favCount;
        };
        
        // Hiding Dropdown by default
        $scope.dropOpenStatus = false;

        //  Toggle Dropdown
        $scope.toggleDropdown = function () {
            $scope.dropOpenStatus = !$scope.dropOpenStatus;
        };
    }]);
});