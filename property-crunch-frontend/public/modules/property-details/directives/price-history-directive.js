/*global define */
/**
 * pcPriceHistory Directive - Compares Property Previous Price with Property
 * Current Price & returns the percentage
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcPriceHistory", function () {
        return {
            restrict : "EA",
            templateUrl :
                "./modules/property-details/directives/price-history.html",
            scope : {
                priceHistory: "=",
                propertyPrice: "="
            },
            link : function (scope) {
                scope.historyDiff = "";
                scope.status = {};
                
                scope.getComparison = function() {
                    scope.status = {
                        above: false,
                        below: false,
                        zero: false
                    };
                    
                    if (scope.priceHistory.hasOwnProperty('data')) { 
                        scope.historyDiff = scope.priceHistory -
                            scope.propertyPrice;
                        if (scope.historyDiff > 0) {
                            scope.status.above = true;
                        } else if (scope.historyDiff < 0) {
                            scope.status.below = true;
                        } else if (scope.historyDiff === 0){
                            scope.status.zero = true;
                        }
                    }
                    
                };
                // Watch Model Value & Update View
                scope.$watch('priceHistory', function () {
                    scope.getComparison();
                });
                scope.$watch('propertyPrice', function () {
                    scope.getComparison();
                });
            }
        };
    });
});