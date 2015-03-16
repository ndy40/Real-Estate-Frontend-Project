/*global define */
/**
 * pcAdjHeight Directive - Add a minimum height on the element based on window
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcAdjHeight", function () {
        return {
            restrict : "A",
            link : function (scope, elem) {
                scope.adjHeight = function () {
                    var winHeight = $(window).height(),
                        elHeight = winHeight - 75; // 66 header 75 footer
                
                    elem.css('min-height', elHeight + 'px');
                };
                
                scope.adjHeight();
                
                $(window).on('resize', function () {
                    scope.adjHeight();
                });
            }
        };
    });
});