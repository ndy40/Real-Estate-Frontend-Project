/**
 * Custom Selectbox Directive
 */
define(["../module"], function (app) {
    app.directive("selectbox", function () {
        'use strict';
		
        return {
            restrict : "E",
            scope : {
                options     : "=",
                defaults    : "=",
                callback    : "="
                //dropDownStatus: "=",
            },
            templateUrl : "./modules/search/directives/selectbox.html",
            link : function (scope, element, attr) {
                   
                // Hiding Dropdown by default
                scope.dropDownStatus = false; 
            
                //  Toggle Dropdown
                scope.dropdown = function() {
                    scope.dropDownStatus = !scope.dropDownStatus;              
                };

                // Setting Default Options
                if (scope.defaults !== undefined) {
                    scope.optionSelected = scope.defaults;
                } else {
                    scope.optionSelected = scope.options[0];
                }

                scope.onSelectEvent = function(value) {
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

