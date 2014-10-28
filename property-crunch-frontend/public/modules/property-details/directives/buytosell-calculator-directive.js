/**
 * Buy To Sell Calculator Directive
 */
define(["../module"], function (app) {
    app.directive("buyToSellCalculator", function () {
        'use strict';
		
        return {
            restrict : "E",
            scope : {
                purchasePrice: "="
            },
            templateUrl : "./modules/property-details/directives/buytosell-calculator.html",
            link : function (scope, element, attr, ngModel) {
                
                // Default Values
                scope.toSell = {
                    mortgageLtv:    0.75, //  (Default: 75%)
                    mortgageRate:   0.06, //  (Default: 6%)
                    resalePrice:    0,
                    holdingPeriod:  0,
                    refurbishment:  0,
                    
                    // Outputs
                    monthlyMortgage:  "", 
                    depositNeeded:   "",
                    totalInvestment: "",
                    profitLoss: "",
                    rOI: ""
                }
       
                scope.calculateToSellResults = function() {
                    
                    // Monthly Mortgage
                    scope.toSell.monthlyMortgage = scope.toSell.purchasePrice * 
                        scope.toSell.mortgageLtv * scope.toSell.mortgageRate / 12

                    // Deoposit Needed
                    scope.toSell.depositNeeded = scope.toSell.purchasePrice - 
                        (scope.toSell.purchasePrice * scope.toSell.mortgageLtv);
                    
                    // Total Investment
                    scope.toSell.totalInvestment = scope.toSell.depositNeeded + 
                        scope.toSell.refurbishment + (scope.toSell.purchasePrice * 
                        scope.toSell.mortgageLtv * scope.toSell.mortgageRate / 12 * 
                        scope.toSell.holdingPeriod);
                    
                    // Profit or Loss
                    scope.toSell.profitLoss = scope.toSell.resalePrice - 
                        (scope.toSell.depositNeeded + scope.toSell.refurbishment + 
                        (scope.toSell.purchasePrice * scope.toSell.mortgageLtv * 
                        scope.toSell.mortgageRate / 12 * scope.toSell.holdingPeriod) + 
                        (scope.toSell.purchasePrice * scope.toSell.mortgageLtv));
                    
                    // ROI 
                    scope.toSell.rOI = scope.toSell.profitLoss / 
                        (scope.toSell.depositNeeded + scope.toSell.refurbishment + 
                        (scope.toSell.purchasePrice * scope.toSell.mortgageLtv * 
                        scope.toSell.mortgageRate / 12 * scope.toSell.holdingPeriod));
                    
                    
                    // Show Results & Hide Calculator
                    scope.toSellResults = true;
                };
                
                // Hide Results & Show Calculator
                scope.reCalculateToSellResults = function() {
                    scope.toSellResults = false;
                };
                
                // Define Purchase Price After Service Returns Data in Controller
                scope.$watch('purchasePrice', function() {
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