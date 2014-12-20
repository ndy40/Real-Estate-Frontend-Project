/*global define */
/**
 * pcToLetCalculator Directive - Buy To Let Calculator  
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcToLetCalculator", function () {

        return {
            restrict : "E",
            templateUrl : "./modules/property-details/directives/to-let-calculator.html",
            scope : {
                purchasePrice: "=",
                rentalIncome: "="
            },
            link : function (scope) {
                // Default Values
                scope.toLet = {
                    // Inputs
                    mortgageLtv:        0.75, //  (Default: 75%)
                    mortgageRate:       0.06, //  (Default: 6%)
                    managementCost:     0,
                    maintenanceCost:    0,
                    // Results
                    monthlyMortgage:        "",
                    depositNeeded:          "",
                    monthlyProfitOrLoss:    "",
                    netRentalYield:         "",
                    trueRoR:                ""
                };

                scope.calculateToLetResults = function () {
                    // Calculate Monthly Mortgage
                    scope.toLet.monthlyMortgage = scope.toLet.purchasePrice *
                        scope.toLet.mortgageLtv * scope.toLet.mortgageRate / 12;

                    // Calculate Deposit Needed
                    scope.toLet.depositNeeded  = scope.toLet.purchasePrice -
                        (scope.toLet.purchasePrice * scope.toLet.mortgageLtv);

                    // Calculate Monthly Profit Or Loss
                    scope.toLet.monthlyProfitOrLoss  =
                        scope.toLet.estRentalIncome -
                            scope.toLet.monthlyMortgage -
                                (scope.toLet.managementCost *
                                    scope.toLet.estRentalIncome) -
                                        (scope.toLet.maintenanceCost *
                                            scope.toLet.estRentalIncome);

                    // Calculate Net Rental Yield
                    scope.toLet.netRentalYield = scope.toLet.monthlyProfitOrLoss
                        * 12 / scope.toLet.purchasePrice;

                    // Calculate True Rate of Return
                    scope.toLet.trueRoR = scope.toLet.monthlyProfitOrLoss * 12 /
                        scope.toLet.depositNeeded;

                    // Show Results
                    scope.toLetResults = true;
                };

                // Hide Results
                scope.reCalculateToLetResults = function () {
                    scope.toLetResults = false;
                };

                // Watch Model Value & Update View
                scope.$watch('purchasePrice', function () {
                    if (scope.purchasePrice === undefined) {
                        scope.toLet.purchasePrice = 0;
                    } else {
                        scope.toLet.purchasePrice = scope.purchasePrice;
                    }
                });

                // Watch Model Value & Update View
                scope.$watch('rentalIncome', function () {
                    if (scope.rentalIncome === undefined) {
                        scope.toLet.estRentalIncome = 0;
                    } else {
                        scope.toLet.estRentalIncome = scope.rentalIncome * scope.toLet.purchasePrice / 100 / 12;
                    }
                });
            }
        };
    });
});
