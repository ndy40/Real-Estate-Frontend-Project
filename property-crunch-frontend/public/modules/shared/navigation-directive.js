/**
* Navigation Directive for centralizing and controlling menu display.
*
*/

define(["./module"], function (app) {
    'use strict';
    app.directive("menuNavigation", ["AuthService", function (AuthService) {
        var link = function (scope, element, attr) {
            $scope.$on("loginSuccess", function (targetScope, currentScope) {
                currentScope.showLogin = true;
            });
        };
    });
});