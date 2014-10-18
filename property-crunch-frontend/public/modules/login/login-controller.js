/*global define */
/**
 * Investor Login Controller
 */

define(["./module", "../nav/index"], function (app) {
    'use strict';
    app.controller("LoginCtrl", ["$scope", "$rootScope", "$location", 'AuthService', function ($scope, $rootScope, $location, AuthService) {
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
                        $rootScope.$broadcast("loginsuccess");
                        $location.path("/home");
                    }
                }, 
                function (data) {
                    alert ("Failed");
                }
            );
        };
        
        $scope.$on("logOut", function (tscope) {
            $rootScope.showLogin = false;
            $rootScope.user = undefined;
        });

        $scope.register = function () {
            // AuthService.register(
            //     $scope.loginData.
            // );

        };
    }]);
});
