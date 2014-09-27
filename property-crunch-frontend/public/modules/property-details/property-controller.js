/*global define */
/**
 * Property Controller
 */
(function (define) {

    define(["./module"], function (app) {
        'use strict';
        app.controller("PropertyCtrl", ["$scope", "SearchService", "$routeParams", function ($scope, SearchService, $routeParams) {
            $scope.hello = function () {
                $scope.propertyId = $routeParams.id;
            }

            $scope.hello();
        }]);
    });
})(define);



