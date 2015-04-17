/*global define */
/**
 * pcNull Directive - Hides if "Null" string found
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcNull", function () {
        return {
            restrict : "A",
            scope : {
                inputSrc: "="
            },
            link : function (scope, element) {
                // Watch Model Value & Update View
                scope.$watch('inputSrc', function () {
                    if (scope.inputSrc === "null") {
                        element.addClass('hide');
                    }
                });
            }
        };
    });
});