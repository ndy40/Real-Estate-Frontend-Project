/*global define */
/**
 * infiniteScroll Directive 
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';

    app.directive("infiniteScroll", ['$rootScope', '$window', '$timeout',
        function($rootScope, $window, $timeout) {
            return {
                link: function(scope, elem, attrs) {
                    $window = angular.element($window);
                    
                    var runOnMobileOnly,
                        handler,
                        checkWhenEnabled = false,
                        scrollDistance = 0,
                        scrollEnabled = true;
                    
                    runOnMobileOnly = function() {
                        var winWidth = $window.width();
                        if (winWidth < 768) {
                            if (attrs.infiniteScrollDistance != null) {
                                scope.$watch(attrs.infiniteScrollDistance, function(value) {
                                    return scrollDistance = parseInt(value, 10);
                                });
                            }

                            if (attrs.infiniteScrollDisabled != null) {
                                scope.$watch(attrs.infiniteScrollDisabled, function(value) {
                                    scrollEnabled = !value;
                                    if (scrollEnabled && checkWhenEnabled) {
                                        checkWhenEnabled = false;
                                        return handler();
                                    }
                                });
                            }

                            handler = function() {
                                var elementBottom, remaining, shouldScroll, windowBottom;
                                windowBottom = $window.height() + $window.scrollTop();
                                elementBottom = elem.offset().top + elem.height();
                                remaining = elementBottom - windowBottom;
                                shouldScroll = remaining <= $window.height() * scrollDistance;
                                if (shouldScroll && scrollEnabled) {
                                    if ($rootScope.$$phase) {
                                        return scope.$eval(attrs.infiniteScroll);
                                    } else {
                                        return scope.$apply(attrs.infiniteScroll);
                                    }
                                } else if (shouldScroll) {
                                    return checkWhenEnabled = true;
                                }
                            };

                            $window.on('scroll', handler);

                            scope.$on('$destroy', function() {
                                return $window.off('scroll', handler);
                            });

                            return $timeout((function() {
                                if (attrs.infiniteScrollImmediateCheck) {
                                    if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
                                        return handler();
                                    }
                                } else {
                                    return handler();
                                }
                            }), 0);
                        } else {
                            $window.unbind('scroll');
                        }
                    };
                    runOnMobileOnly();
                    $window.on('resize', runOnMobileOnly);
                }
            };
        }]);
});