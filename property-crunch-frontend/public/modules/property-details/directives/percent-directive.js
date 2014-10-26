/**
 * Profit Calculator Directive
 */
define(["../module"], function (app) {
    app.directive("percent", function () {
        'use strict';
		
        return {
            restrict : "A",
            require: 'ngModel',
            link : function (scope, element, attr, ngModelController) {
                
                // Add % sign & multiply by 100 to get integer
                var percentify = function(data) {
                    if (data !== undefined) {
                        return (data * 100) + "%";
                    }
                }
                
                // Remove % sign & divide by 100 to get float
                var numify = function(data) {
                    var splitData = data.split("%"),
                        int = splitData[0] / 100;
                    
                    if (isNaN(int)) {
                        return 0;
                    } else {
                        return int;
                    }
                }
                
                // Convert FROM View TO Model
                ngModelController.$parsers.push(function(data) {
                    return numify(data);
                });
                
                // Convert FROM Model to VIEW 
                ngModelController.$formatters.push(function(data) {
                    return percentify(data);
                });
                
                // Update View on Blur
                element.bind('blur', function() {
                    if (ngModelController.$modelValue !== undefined) {
                        ngModelController.$viewValue = percentify(ngModelController.$modelValue);
                        ngModelController.$render();
                    } 
                });  

            }
         };
    });
});

