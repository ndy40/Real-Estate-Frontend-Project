/*global define */
/**
 * pcColorCode Directive - Color Codes Positive/ Negative Values
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcColorCode", function () {
        return {
            restrict : "A",
            scope : {
                inputSrc: "="
            },
            link : function (scope, element) {
                // Watch Model Value & Update View
                scope.$watch('inputSrc', function () {
                    if (scope.inputSrc > 0) {
                        element.addClass('positive');
                    } else if (scope.inputSrc < 0) {
                        element.addClass('negative');
                    } else if (scope.inputSrc === 0){
                        element.addClass('zero');
                    }
                });
            }
        };
    });
});