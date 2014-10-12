/**
 * Static Controller
 */
(function (define) {

    define(["./module"], function (app) {
        'use strict';
        app.controller("StaticCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
            $scope.pageName = $routeParams.pageName;
        }]);
    });
})(define);



