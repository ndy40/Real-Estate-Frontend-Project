/**
 * Static Controller
 */
(function (define) {

    define(["./module"], function (app) {
        'use strict';
        app.controller("StaticCtrl", ["$scope", "$routeParams",  function ($scope, $routeParams) {
            
            $scope.pageName = $routeParams.pageName;
            
            
            $scope.accordion = {
                status: {
                    first: true,
                    second: false,
                    third:  false,
                    fourth: false,
                    fifth:  false,
                    sixth:  false,
                    seventh:false,
                    eigth:  false,
                    ninth:  false,
                    tenth:  false,
                    eleventh:false
                }
            };
            
        }]);
    });
})(define);



