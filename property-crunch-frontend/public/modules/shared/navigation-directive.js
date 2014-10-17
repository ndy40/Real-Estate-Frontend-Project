/**
* Navigation Directive for centralizing and controlling menu display.
*
*/

define(["./module"], function (app) {
    'use strict';
    app.directive("menuNavigation", ["AuthService", function (AuthService) {
        var link = function (scope, element, attr) {
            scope.showLogin = (AuthService.isLoggedIn !== 'true') ? false : true;
            scope.user = AuthService.getCurentUser(undefined);
            
            scope.$on("loginSuccess", function (targetScope, currentScope) {
                scope.user = AuthService.user;
                scope.showLogin = AuthService.isLoggedIn;
            });
            
            scope.$on("$locationChangeStart", function (tscope) {
                if (AuthService.user === undefined || AuthService.user == null) {
                    AuthService.getCurentUser(scope.setUserData);
                } else {
                    scope.user = AuthService.user;
                }
                 
                scope.showLogin = AuthService.isLoggedIn;
            });
            
            scope.setUserData = function (data) {
                scope.user = data;
                scope.showLogin = (AuthService.isLoggedIn !== 'true') ? false : true;
            };
            
            scope.logout = function () {
                AuthService.logout(function (data) {
                    if (data === 'true') {
                        delete scope.showLogin;
                        delete scope.user;
                        AuthService.destroy();
                    }
                });
            };
            
            // Hiding Dropdown by default
            scope.dropOpenStatus = false; 
            
            //  Toggle Dropdown
            scope.toggleDropdown = function() {
                scope.dropOpenStatus = !scope.dropOpenStatus;              
            };
        };
        
        return {
            link        : link,
            restrict : "E",
            templateUrl : "../modules/shared/navigation-partial.html"
        };
    }]);
});