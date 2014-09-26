/**
 * Custom Spinner Directive
 */
define(["./module"], function (app) {
    app.directive("spinner", function () {
        'use strict';
		
		return {
            restrict : "E",
            scope : {
				defaults	: "=",
				callback	: "="
            },
			templateUrl : "./modules/search/spinner.html",
            link : function (scope, element, attr) {
			   
				// Setting Default Options
				if (scope.defaults !== undefined) {
					scope.inputVal = scope.defaults;
					scope.selectedVal = -1;
				} else {
					scope.inputVal = "All";
					scope.selectedVal = -1;
				}
				
				//  Increment Number 
				scope.incNum = function(inputVal) {
					if (scope.inputVal === "All") {
						scope.inputVal = 1;
						scope.selectedVal = 1;
					} else {
						scope.inputVal += 1;
						scope.selectedVal = scope.inputVal;	
					}
				}
				
				//  Decrement Number 
				scope.decNum = function(inputVal) {
					if (scope.inputVal !== "All"){
						if (scope.inputVal === 1) {
							scope.inputVal = "All";
							scope.selectedVal = "-1";	
						} else {
							scope.inputVal -= 1;
							scope.selectedVal = scope.inputVal;	
						}
					}
				}
			   
			   	// Test Input & Return Default Value if isNaN
				scope.$watch('inputVal', function(val) {
					if (isNaN(val) || val < 1) {
						scope.inputVal = "All";
						scope.selectedVal = "-1";
					} else {
						scope.inputVal = val;
						scope.selectedVal = val;
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

