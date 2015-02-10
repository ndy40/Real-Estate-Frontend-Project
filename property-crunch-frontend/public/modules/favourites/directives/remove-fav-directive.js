/*global define */
/**
 * pcRemoveFav Directive - To Add Classes to Favourite Properties 
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcRemoveFav", ["UserModel", function (UserModel) {
        return {
            restrict : "EA",
            scope : {
                propertyId: "=",
                favUpdate: "="
            },
            link : function (scope, elem) {
                /**
                 * Add "favourite" class to the favourite properties
                 */
                scope.removeFav = function () {
                    if (!UserModel.isFav(scope.propertyId)) {
                        elem.addClass("hidden");
                    } 
                };

                /**
                *  setFav once Properties Data has been loaded from
                *  the Service
                */
                scope.$watch('propertyId', function () {
                    scope.removeFav();
                });
                
                scope.$watch('favUpdate', function () {
                    scope.removeFav();
                });

            }
        };
    }]);
});