/*global define */
/**
 * pcToSellCalculator Directive - Buy To Sell Calculator
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcToSellCalculator", function () {

        return {
            restrict : "E",
            scope : {
                purchasePrice: "="
            },
            templateUrl :
                "./modules/property-details/directives/to-sell-calculator.html",
            link : function (scope) {
                // Default Values
                scope.toSell = {
                    mortgageLtv:    0.75, //  (Default: 75%)
                    mortgageRate:   0.06, //  (Default: 6%)
                    resalePrice:    0,
                    holdingPeriod:  0,
                    refurbishment:  0,
                    otherCosts:     0,
                    stampDuty:      0,
                    // Outputs
                    monthlyMortgage:  "",
                    depositNeeded:   "",
                    totalInvestment: "",
                    profitLoss: "",
                    rOI: ""
                };

                scope.calcStampDuty = function() {
                    if (scope.toSell.purchasePrice <= 125000) {
                        scope.toSell.stampDuty = 0;
                    } else if (scope.toSell.purchasePrice > 125000 &&
                        scope.toSell.purchasePrice <= 250000) {
                            scope.toSell.stampDuty =
                                (scope.toSell.purchasePrice - 125000) * 0.02;
                    } else if (scope.toSell.purchasePrice > 250000 &&
                            scope.toSell.purchasePrice <= 925000) {
                            scope.toSell.stampDuty =
                                ((scope.toSell.purchasePrice - 250000) * 0.05) +
                                    2500;
                    } else if (scope.toSell.purchasePrice > 925000 &&
                        scope.toSell.purchasePrice <= 1500000) {
                            scope.toSell.stampDuty =
                                ((scope.toSell.purchasePrice - 925000) * 0.1) +
                                    36250;
                    } else if (scope.toSell.purchasePrice > 1500000) {
                        scope.toSell.stampDuty =
                            ((scope.toSell.purchasePrice - 1500000) * 0.12) +
                                93750;
                    }
                };

                scope.calculateToSellResults = function () {
                    // Monthly Mortgage
                    scope.toSell.monthlyMortgage = scope.toSell.purchasePrice *
                        scope.toSell.mortgageLtv * scope.toSell.mortgageRate /
                        12;

                    // Deoposit Needed
                    scope.toSell.depositNeeded = scope.toSell.purchasePrice -
                        (scope.toSell.purchasePrice * scope.toSell.mortgageLtv);
                    
                    // Stamp Duty
                    scope.calcStampDuty();

                    // Total Investment
                    scope.toSell.totalInvestment = scope.toSell.depositNeeded +
                        scope.toSell.refurbishment + scope.toSell.otherCosts +
                            (scope.toSell.purchasePrice *
                                scope.toSell.mortgageLtv *
                                    scope.toSell.mortgageRate / 12 *
                                        scope.toSell.holdingPeriod) +
                                            scope.toSell.stampDuty;

                    // Profit or Loss
                    scope.toSell.profitLoss = scope.toSell.resalePrice -
                        (scope.toSell.totalInvestment +
                            (scope.toSell.purchasePrice *
                                scope.toSell.mortgageLtv));

                    // ROI 
                    scope.toSell.rOI = scope.toSell.profitLoss /
                        scope.toSell.totalInvestment;

                    // Show Results & Hide Calculator
                    scope.toSellResults = true;
                };

                // Hide Results & Show Calculator
                scope.reCalculateToSellResults = function () {
                    scope.toSellResults = false;
                };

                // Define Purchase Price After Service Returns Data in Ctrlr
                scope.$watch('purchasePrice', function () {
                    if (scope.purchasePrice === undefined) {
                        scope.toSell.purchasePrice = 0;
                    } else {
                        scope.toSell.purchasePrice = scope.purchasePrice;
                    }
                });

            }
        };
    });
});