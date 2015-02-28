/*global define */
/**
*   Shared Module Definition for RequireJS
*/

define([
    "./controllers/navigation-controller",
    "./directives/rec-properties-directive",
    "./directives/add-to-fav-directive",
    "./directives/color-code-directive",
    "./filters/address-filter",
    "./filters/currency-filter",
    "./filters/percent-filter",
    "./filters/positive-filter",
    "./filters/trusted-html-filter",
    "./services/rec-properties-service",
    "./services/user-model-service",
    "./authentication/index",
], function () {});
