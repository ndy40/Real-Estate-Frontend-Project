/**
*  Module
*
* This is the main application modules.
* Depends on the following packages : 
*   - PC.Search -> components/search/module.js
*/
var APP = angular.module('PC', ["ngRoute", "PC.Search", "PC.Home"]);

APP.constant('URLS', {
        "baseUrl" : "http://pc.frontend"
});

APP.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "components/home/home.html",
            controller  : "HomeController"
        })
        .otherwise({ redirectTo :  "/"});
}]);
