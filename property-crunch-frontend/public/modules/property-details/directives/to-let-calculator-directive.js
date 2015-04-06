/*global define */
/**
 * pcToLetCalculator Directive - Buy To Let Calculator  
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcToLetCalculator", function () {

        return {
            restrict : "E",
            templateUrl :
                "./modules/property-details/directives/to-let-calculator.html",
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
                    refurbishment:      0,
                    otherCosts:         0,
                    // Results
                    monthlyMortgage:        "",
                    depositNeeded:          "",
                    stampDuty:              "",
                    totalPurchaseCost:      "",
                    monthlyProfitOrLoss:    "",
                    yearlyROI:              ""
                };

                scope.calcStampDuty = function() {
                    if (scope.toLet.purchasePrice <= 125000) {
                        scope.toLet.stampDuty = 0;
                    } else if (scope.toLet.purchasePrice > 125000 &&
                        scope.toLet.purchasePrice <= 250000) {
                            scope.toLet.stampDuty =
                                (scope.toLet.purchasePrice - 125000) * 0.02;
                    } else if (scope.toLet.purchasePrice > 250000 &&
                        scope.toLet.purchasePrice <= 925000) {
                            scope.toLet.stampDuty =
                                ((scope.toLet.purchasePrice - 250000) * 0.05) +
                                    2500;
                    } else if (scope.toLet.purchasePrice > 925000 &&
                        scope.toLet.purchasePrice <= 1500000) {
                            scope.toLet.stampDuty =
                                ((scope.toLet.purchasePrice - 925000) * 0.1) +
                                    36250;
                    } else if (scope.toLet.purchasePrice > 1500000) {
                        scope.toLet.stampDuty =
                            ((scope.toLet.purchasePrice - 1500000) * 0.12) +
                                93750;
                    }
                };

                scope.calculateToLetResults = function () {
                    // Calculate Monthly Mortgage
                    scope.toLet.monthlyMortgage = scope.toLet.purchasePrice *
                        scope.toLet.mortgageLtv * scope.toLet.mortgageRate / 12;

                    // Calculate Deposit Needed
                    scope.toLet.depositNeeded  = scope.toLet.purchasePrice -
                        (scope.toLet.purchasePrice * scope.toLet.mortgageLtv);

                    // Calculate Stamp Duty
                     scope.calcStampDuty();

                    // Calculate Total Purchase Cost
                    scope.toLet.totalPurchaseCost = scope.toLet.depositNeeded +
                        scope.toLet.stampDuty + scope.toLet.refurbishment +
                            scope.toLet.otherCosts;

                    // Calculate Monthly Profit Or Loss
                    scope.toLet.monthlyProfitOrLoss  =
                        scope.toLet.estRentalIncome -
                            scope.toLet.monthlyMortgage -
                                (scope.toLet.managementCost *
                                    scope.toLet.estRentalIncome) -
                                        (scope.toLet.maintenanceCost *
                                            scope.toLet.estRentalIncome);


                    // Calculate True Rate of Return
                    scope.toLet.yearlyROI = scope.toLet.monthlyProfitOrLoss *
                        12 / scope.toLet.totalPurchaseCost;

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
                        // Adding  Math.round(num *100)/100 for 2 decimal points
                        scope.toLet.estRentalIncome = 
                            Math.round(scope.rentalIncome *
                                scope.toLet.purchasePrice / 100 / 12 * 100) /
                                    100;
                    }
                });
            }
        };
    });
});