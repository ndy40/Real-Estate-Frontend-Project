/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "./home/index",
    "./search/index",
    "./property-details/index",
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
		"PCAPPHOME", 
		"PCAPPSEARCH",
		"PCAPPPROPERTYDETAILS",
		"PCSHARED",
		"PCAPPLEARNMORE",
		"PCAPPLISTPROPERTY",
		"PCAPPLOGIN",
		"PCAPPINVESTORDASHBOARD",
		"PCAPPNAV"
	]);
});


