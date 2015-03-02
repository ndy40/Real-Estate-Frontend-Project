/*global define */
/**
 * pcComparables Directive
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcComparables", function () {

        return {
            restrict : "E",
            scope : {
                propertySrc: "=",
                compareTitle: "="
            },
            templateUrl : "./modules/property-details/directives/comparables.html",
            link : function (scope, element, attr, ngModel) {
                scope.$watch('propertySrc', function () {
                    if (scope.propertySrc === undefined) {
                        scope.propertySrc = {};
                    } else {
                        //scope.toSell.purchasePrice = scope.purchasePrice;
                    }
                });
            }
        };
    });
});