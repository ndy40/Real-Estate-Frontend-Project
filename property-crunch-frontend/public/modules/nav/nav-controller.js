/*global define */
/**
 * Agency Login Controller
 */

define(["./module", "../nav/index"], function (app) {
    'use strict';
    app.controller("NavCtrl", ["$scope", function ($scope) {
		$scope.isCollapsed = false;
    }]);
});

