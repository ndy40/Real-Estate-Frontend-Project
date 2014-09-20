/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "./home/index",
    "./search/index",
	"./shared/index",
	"./learn-more/index",
	"./list-property/index",
	"./login/index",
	"./investor-dashboard/index",
	"./nav/index"
	
], function (angular) {
    'use strict';
    return angular.module("PCAPP", [
		"ngRoute",
		"ui.bootstrap", 
		"PCAPPHOME", 
		"PCAPPSEARCH",
		"PCSHARED",
		"PCAPPLEARNMORE",
		"PCAPPLISTPROPERTY",
		"PCAPPLOGIN",
		"PCAPPINVESTORDASHBOARD",
		"PCAPPNAV"
	]);
});


