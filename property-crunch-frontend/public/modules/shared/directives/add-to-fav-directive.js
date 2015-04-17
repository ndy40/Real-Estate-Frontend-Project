/*global define */
/**
 * pcAddToFav Directive - To Add Classes to Favourite Properties 
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("pcAddToFav", ["UserModel", function (UserModel) {
        return {
            restrict : "E",
            scope : {
                propertyId: "=",
                favUpdate: "="
            },
            link : function (scope, elem) {
                /**
                 * Add "favourite" class to the favourite properties
                 */
                scope.setFav = function () {
                    if (UserModel.isLoggedIn) {
                        if (UserModel.isFav(scope.propertyId)) {
                            elem.addClass("favourite");
                        }
                    }
                };

                /**
                *  setFav once Properties Data has been loaded from
                *  the Service
                */
                scope.$watch('propertyId', function () {
                    scope.setFav();
                });
                
                scope.$watch('favUpdate', function () {
                    scope.setFav();
                });

            }
        };
    }]);
});