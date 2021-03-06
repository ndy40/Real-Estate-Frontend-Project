/*global define */
/**
 * pcSpinner Directive - Number Spinner Directive
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcSpinner", function () {

        return {
            restrict : "E",
            templateUrl : "./modules/search/directives/spinner.html",
            scope : {
                defaults    : "=",
                callback    : "="
            },
            link : function (scope, element) {

                // Setting Default Options
                if (scope.defaults !== undefined) {
                    scope.inputVal = scope.defaults;
                    scope.selectedVal = -1;
                } else {
                    scope.inputVal = "All";
                    scope.selectedVal = -1;
                }

                //  Increment Number 
                scope.incNum = function (inputVal) {
                    if (scope.inputVal === "All") {
                        scope.inputVal = 1;
                        scope.selectedVal = 1;
                    } else {
                        scope.inputVal += 1;
                        scope.selectedVal = scope.inputVal;
                    }
                };

                //  Decrement Number 
                scope.decNum = function (inputVal) {
                    if (scope.inputVal !== "All") {
                        if (scope.inputVal === 1) {
                            scope.inputVal = "All";
                            scope.selectedVal = "-1";
                        } else {
                            scope.inputVal -= 1;
                            scope.selectedVal = scope.inputVal;
                        }
                    }
                };

                // Watch for change may it be from input or buttons and update 
                // callback
                scope.$watch('inputVal', function (val) {
                    if (scope.callback !== undefined) {
                        if (isNaN(val) || val < 1) {
                            scope.inputVal = "All";
                            scope.selectedVal = "-1";
                        } else {
                            scope.inputVal = val;
                            scope.selectedVal = val;
                        }
                        scope.callback(scope.selectedVal);
                    }
                });

                // Select Fix: Select All on Input.Click
                var inputEl = element.find('input');
                inputEl.on('click', function () {
                    this.select();
                });
            }
        };
    });
});