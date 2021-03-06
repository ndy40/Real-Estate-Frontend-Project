/*global define */
/* 
 * AJAX Loader Service used for showing/hiding loading gif
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.factory('LoaderService', ['$rootScope', function($rootScope) {
        var LoaderService = function () {
            return;
        };
        // LoaderService.showLoader();
        LoaderService.prototype.showLoader = function () {
            $rootScope.$broadcast('showLoader');
        };
        // LoaderService.hideLoader();
        LoaderService.prototype.hideLoader = function () {
            $rootScope.$broadcast('hideLoader');
        };

        return new LoaderService();
    }]);
});