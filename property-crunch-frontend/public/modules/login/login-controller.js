/*global define */
/**
 * Investor Login Controller
 */

define(["./module", "../nav/index", "../authentication/index"], function (app) {
    'use strict';
    app.controller("LoginCtrl", ["$scope", 'AuthService', 'sessionService', function ($scope, AuthService, sessionService) {
	'use strict';
        //Model for holding login data
        $scope.loginData = {};
        
        //Submit form data for login to take place.
        $scope.submitForm = function () {
            'use strict';
            var isValude = false;
            AuthService.authenticate(
                $scope.loginData.email,
                $scope.loginData.password,
                $scope.loginData.remember
            ).success(function(response){
                $scope.$broadcash("loginSuccess");
            }).error(function (response) {
                alert(response.flash);
            });
        };	
    }]);
});
