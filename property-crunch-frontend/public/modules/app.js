/*global define */
/**
 * Applicaiton module declaration file.
 */

define([
    "angular",
    "ngRoute",
    "./home/index",
    "./search/index",
	"./shared/index"
	
], function (angular) {
    'use strict';
    return angular.module("PCAPP", [
		"ngRoute",
		"ui.bootstrap", 
		"PCAPPHOME", 
		"PCAPPSEARCH",
		"PCSHARED"
	]);
});


