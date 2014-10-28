/**
 * Buy To Let Calculator Directive
 */
define(["../module"], function (app) {
    app.directive("buyToLetCalculator", function () {
        'use strict';
		
        return {
            restrict : "E",
            scope : {
                purchasePrice: "=",
                rentalIncome: "="
            },
            templateUrl : "./modules/property-details/directives/buytolet-calculator.html",
            link : function (scope, element, attr, ngModel) {
                
                // Default Values
                scope.toLet = {
                    mortgageLtv:    0.75, //  (Default: 75%)
                    mortgageRate:   0.06, //  (Default: 6%)
                    managementCost: 0,
                    maintenanceCost:0,
                    monthlyMortgage:"",
                    depositNeeded:  "", 
                    rentalProfit:   "",
                    estRentalYield: ""
                }
                
                scope.calculateToLetResults = function() {
                    scope.toLet.monthlyMortgage = scope.toLet.purchasePrice * 
                        scope.toLet.mortgageLtv * scope.toLet.mortgageRate/12;
                    
                    scope.toLet.depositNeeded = scope.toLet.purchasePrice - 
                        (scope.toLet.purchasePrice * scope.toLet.mortgageLtv);
                    
                    scope.toLet.rentalProfit = scope.toLet.estRentalIncome - 
                        scope.toLet.monthlyMortgage - 
                        (scope.toLet.managementCost * scope.toLet.estRentalIncome) - 
                        (scope.toLet.maintenanceCost * scope.toLet.estRentalIncome);
                    
                    scope.toLet.estRentalYield = scope.toLet.estRentalIncome * 12/
                        scope.toLet.purchasePrice;
                    
                    scope.toLetResults = true;
                };
                
                scope.reCalculateToLetResults = function() {
                    scope.toLetResults = false;
                };
                
                scope.$watch('purchasePrice', function() {
                     if (scope.purchasePrice === undefined) {
                        scope.toLet.purchasePrice = 0;
                     } else {
                        scope.toLet.purchasePrice = scope.purchasePrice;
                     }
                });
                
                scope.$watch('rentalIncome', function() {
                     if (scope.rentalIncome === undefined) {
                        scope.toLet.estRentalIncome = 0;
                     } else {
                        scope.toLet.estRentalIncome = scope.rentalIncome;
                     }
                });
                
                
            }
         };
    });
});

