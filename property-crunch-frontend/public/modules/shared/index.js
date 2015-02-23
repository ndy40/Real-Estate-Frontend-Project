/*global define */
/**
*   Shared Module Definition for RequireJS
*/

define([
    "./controllers/navigation-controller",
    "./directives/rec-properties-directive",
    "./filters/address-filter",
    "./filters/currency-filter",
    "./filters/percent-filter",
    "./services/rec-properties-service",
    "./services/user-model-service",
    "./authentication/index",
    "./directives/add-to-fav-directive"
], function () {});
