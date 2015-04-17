/**
 * pcActiveLink - Set Nav Active States Directive
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */
define(["../module"], function (app) {
    app.directive("pcActiveLink", ["$location", function (location) {
        'use strict';
		
//         return {
//            restrict : "A",
//            link : function (scope, element, attr) {
//                var clazz = attr.activeLink;
//                var path = attr.href;
//                path = path.substring(1); //hack because path does bot return including hashbang
//                scope.location = location;
//                scope.$watch('location.path()', function(newPath) {
//                    if (path === newPath) {
//                            element.addClass(clazz);
//                    } else {
//                            element.removeClass(clazz);
//                    }
//                });
//            }
//         };
    }]);
});