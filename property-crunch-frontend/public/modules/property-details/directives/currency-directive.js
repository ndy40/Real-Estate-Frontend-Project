/**
 * Profit Calculator Directive
 */
define(["../module"], function (app) {
    app.directive("currency", function () {
        'use strict';
		
        return {
            restrict : "A",
            require: 'ngModel',
            link : function (scope, element, attr, ngModelController) {
                
                // Add £ sign & Thousand Separator (,)
                var stringify = function(num) {
                    return "£" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                
                // Remove Thousand Separator (,)
                var numify = function(data) {
                    var num =  parseInt(data.replace(/[^0-9-.]/g, ''));
                    
                    if (isNaN(num)) {
                        return 0;
                    } else {
                        return num;
                    }
                }
                
                // Convert FROM View TO Model
                ngModelController.$parsers.push(function(data) {
                    return numify(data);
                });
                
                // Convert FROM Model to VIEW 
                ngModelController.$formatters.push(function(data) {
                    if (data !== undefined) {
                        return stringify(data);
                    }
                });
                
                // Update View on Blur
                element.bind('blur', function() {
                    if (ngModelController.$modelValue !== undefined) {
                        ngModelController.$viewValue = stringify(ngModelController.$modelValue);
                        ngModelController.$render();
                    }
                    
                    // Add ng-invalid if 0
                    if (ngModelController.$modelValue === 0) {
                        element.addClass('invalid');
                    } else {
                        element.removeClass('invalid');
                    }
                });
                  
            }
         };
    });
});

