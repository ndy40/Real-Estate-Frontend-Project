/**
* This is the default controller..  --- temporary till i can refactor
*
*/

define([
    "angular",
    "./components/home/home-controller",
], function (angular) {
    'use strict';
    return angular.module('app', ["ngRoute", "pc.home"])
        .config(['$routeProvider',function($routeProvider) {

            $routeProvider.when("/", {
                controller  : "HomeController",
                templateUrl : "./components/home/home.html"
            })
            .otherwise({
                redirectTo : "/"
            });
            
        }]);
});