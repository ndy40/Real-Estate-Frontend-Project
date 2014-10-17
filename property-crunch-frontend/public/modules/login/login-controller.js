/*global define */
/**
 * Investor Login Controller
 */

define(["./module", "../nav/index", "../authentication/index"], function (app) {
    'use strict';
    app.controller("LoginCtrl", ["$scope", "$location", 'AuthService', function ($scope, $location, AuthService) {
	'use strict';
        //Model for holding login data
        $scope.loginData = {};
        
        //Submit form data for login to take place.
        $scope.submitForm = function () {
            'use strict';
            AuthService.login(
                $scope.loginData.email,
                $scope.loginData.password,
                $scope.loginData.remember, 
                function (data) {
                     if (data !== undefined) {
                        $scope.$broadcast("loginSuccess");
                        $location.path("/home");
                    }
                }, 
                function (data) {
                    alert ("Failed");
                }
            );
        };	
    }]);
});
