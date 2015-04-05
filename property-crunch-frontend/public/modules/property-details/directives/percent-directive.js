/*global define */
/**
 * pcPercent Directive - Percent to Integer to Percent Convertor
 */
define(["../module.min"], function (app) {
    'use strict';
    app.directive("pcPercent", function () {
        return {
            restrict : "A",
            require: 'ngModel',
            link : function (scope, element, attr, ngModel) {
                // Add % sign & multiply by 100 to get integer
                scope.percentify = function (data) {
                    if (data !== undefined) {
                        return (data * 100) + "%";
                    }
                };

                // Remove % sign & divide by 100 to get float
                scope.numify = function (data) {
                    var splitData = data.split("%"),
                        int = splitData[0] / 100;
                    if (isNaN(int)) {
                        return 0;
                    }
                    return int;
                };

                // Convert FROM View TO Model
                ngModel.$parsers.push(function (data) {
                    return scope.numify(data);
                });

                // Convert FROM Model to VIEW 
                ngModel.$formatters.push(function (data) {
                    return scope.percentify(data);
                });

                // Update View on Blur
                element.bind('blur', function () {
                    if (ngModel.$modelValue !== undefined) {
                        ngModel.$viewValue =
                            scope.percentify(ngModel.$modelValue);
                        ngModel.$render();
                    }
                });
            }
        };
    });
});