/*global define */
/**
 * pcComparables Directive
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcComparables", function () {

        return {
            restrict : "E",
            scope : {
                propertySrc: "=",
                compareTitle: "=",
                avgPrice: "="
            },
            templateUrl : "./modules/property-details/directives/comparables.html",
            link : function (scope, element, attr, ngModel) {
                scope.$watch('propertySrc', function () {
                    scope.obj = {
                        src     : [],
                        total   : scope.propertySrc.length,
                        pointer : 2,
                        counter : 2,
                        current : [],
                        noMore  : false,
                    };
                     
                        
                    scope.init = function() {
                        if (scope.propertySrc.length > 0) {
                            scope.obj.src = scope.propertySrc;
                            scope.obj.current = scope.obj.src.slice(0, scope.obj.pointer);
                        }
                    };
                    
                    scope.updateList = function() {
                        if (scope.obj.current.length === scope.obj.total ) {
                            scope.obj.noMore  = true;
                        } else {
                            scope.obj.pointer += 2;
                            scope.obj.current = scope.obj.src.slice(0, scope.obj.pointer);
                        }
                    };
                    
                    
                    if (scope.propertySrc === undefined) {
                        scope.propertySrc = {};
                    } else {
                        scope.init();                        
                    }
                    
                    
                });
            }
        };
    });
});