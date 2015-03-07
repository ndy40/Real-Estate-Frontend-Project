/*global define */
/**
 * pcPriceCompare Directive - Compares Avg Price with Property Price & returns
 * the percentage
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcPriceCompare", function () {
        return {
            restrict : "EA",
            templateUrl : "./modules/property-details/directives/price-compare.html",
            scope : {
                avgPrice: "=",
                propertyPrice: "="
            },
            link : function (scope, element) {
                scope.marketDiff = "";
                scope.status = {
                    above: false,
                    below: false,
                    zero: false
                };
                    
                scope.getComparison = function() {
                    scope.marketDiff = (scope.propertyPrice - scope.avgPrice) /
                        scope.avgPrice * 100;
                
                    scope.status = {
                        above: false,
                        below: false,
                        zero: false
                    };
                    
                    if (scope.marketDiff > 0) {
                        scope.status.above = true;
                    } else if (scope.marketDiff < 0) {
                        scope.status.below = true;
                    } else if (scope.marketDiff === 0){
                        scope.status.zero = true;
                    }
                };
                // Watch Model Value & Update View
                scope.$watch('avgPrice', function () {
                    scope.getComparison();
                });
                scope.$watch('propertyPrice', function () {
                    scope.getComparison();
                });
            }
        };
    });
});