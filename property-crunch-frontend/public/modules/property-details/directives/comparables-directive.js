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
                propertySrc: "="
            },
            templateUrl : "./modules/property-details/directives/comparables.html",
            link : function (scope, element, attr, ngModel) {
                scope.$watch('propertySrc', function () {
                    if (scope.propertySrc === undefined) {
                        scope.propertySrc = 0;
                    } else {
                        scope.toSell.purchasePrice = scope.purchasePrice;
                    }
                });
            }
        };
    });
});