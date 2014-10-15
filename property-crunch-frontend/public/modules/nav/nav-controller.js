/*global define */
/**
 * Navigation Controller
 */

define(["./module"], function (app) {
    'use strict';
    app.controller("NavCtrl", ["$scope", function ($scope) {
	$scope.isCollapsed = false;
    }]);
});

