/*global define */
/**
 * pcCurrency Directive - Currency to Integer to Currency Convertor
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcCurrency", function () {

        return {
            restrict : "A",
            require: 'ngModel',
            link : function (scope, element, attr, ngModel) {
                // Add £ sign & Thousand Separator (,)
                scope.currencify = function (num) {
                    return "£" +
                        num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };

                // Remove Thousand Separator (,)
                scope.integerify = function (data) {
                    var num =  parseInt(data.replace(/[^0-9-.]/g, ''));
                    if (isNaN(num)) {
                        return 0;
                    }
                    return num;
                };

                // Convert FROM View TO Model
                ngModel.$parsers.push(function (data) {
                    return scope.integerify(data);
                });

                // Convert FROM Model to VIEW 
                ngModel.$formatters.push(function (data) {
                    if (data !== undefined) {
                        return scope.currencify(data);
                    }
                });

                // Update View on Blur
                element.bind('blur', function () {
                    if (ngModel.$modelValue !== undefined) {
                        ngModel.$viewValue =
                            scope.currencify(ngModel.$modelValue);
                        ngModel.$render();
                    }

                    // Add ng-invalid if 0
                    if (ngModel.$modelValue === 0) {
                        element.addClass('invalid');
                    } else {
                        element.removeClass('invalid');
                    }
                });
            }
        };
    });
});