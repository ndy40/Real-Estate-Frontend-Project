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
				defaults	: "=",
				callback	: "="
            },
			templateUrl : "./modules/search/directives/selectbox.html",
            link : function (scope, element, attr) {
			   
			   //  Toggle Dropdown
			   var dropOpen = function(event, $document) {					
					event.preventDefault();
					var dropDownEl = element.find('ul');
					dropDownEl.toggleClass('show');
			   }
			   element.bind('click', dropOpen);
			   
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
			   }
			   
			}
			
		};
				
    });
});

