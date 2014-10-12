/*global define */
/**
 * Investor Login Controller
 */

define(["./module", "../nav/index", "../login/index"], function (app) {
    'use strict';
    app.controller("LoginCtrl", ["$scope", 'authService', 'sessionService', function ($scope, authService, sessionService) {
		
        $scope.submitForm = function(){
            var auth = authService.auth($scope.loginData);
            auth.success(function(response){
                if (response.id) {
                    sessionService.set('auth',true); //This sets our session key/val pair as authenticated
                } else {
                    alert('could not verify your login');
                }
            });
        }	
    }]);
});
