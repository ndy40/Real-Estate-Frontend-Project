/*global define */
/**
 * pcSelectbox Directive - Custom Selectbox Directive - Used on "Refine your 
 * Search" Filters
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcSelectbox", function () {

        return {
            restrict : "E",
            templateUrl : "./modules/search/directives/selectbox.html",
            scope : {
                options     : "=",
                defaults    : "=",
                callback    : "="
            },
            link : function (scope) {

                // Hiding Dropdown by default
                scope.dropDownStatus = false;

                //  Toggle Dropdown
                scope.dropdown = function () {
                    scope.dropDownStatus = !scope.dropDownStatus;
                };

                // Setting Default Options
                if (scope.defaults !== undefined) {
                    scope.optionSelected = scope.defaults;
                } else {
                    scope.optionSelected = scope.options[0];
                }

                scope.onSelectEvent = function (value) {
                    if (scope.callback !== undefined) {
                        scope.callback(value);
                    }
                    scope.optionSelected = value;
                    // Hiding Dropdown on Select
                    scope.dropDownStatus = false;
                };
            }
        };
    });
});