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
                defaults    : "=",
                options     : "=",
                callback    : "=",
                optionSelected: "="
            },
            link : function (scope) {
                // Hiding Dropdown by default
                scope.dropDownStatus = false;

                //  Toggle Dropdown
                scope.dropdown = function () {
                    scope.dropDownStatus = !scope.dropDownStatus;
                };

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