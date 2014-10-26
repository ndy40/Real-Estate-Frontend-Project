/**
 * Comparables Directive
 */
define(["../module"], function (app) {
    app.directive("comparables", function () {
        'use strict';
		
        return {
            restrict : "E",
            scope : {
                propertySrc: "="
            },
            templateUrl : "./modules/property-details/directives/comparables.html",
            link : function (scope, element, attr, ngModel) {
                
                
                //$location.path('/property/'+property.id);
                
                // Define Purchase Price After Service Returns Data in Controller
                //scope.$watch('propertySrc', function() {
//                     if (scope.propertySrc === undefined) {
//                        scope.propertySrc = 0;
//                     } else {
//                        scope.toSell.purchasePrice = scope.purchasePrice;
//                     }
//                });
                
            }
         };
    });
});