/* 
 * An session service .
 */

define(["./module"], function (app) {
    'use strict';
	return app.factory('sessionService', function() {
		return {
			get:function(key) {
				return sessionStorage.getItem(key);
			},
			set:function(key,val) {
				return sessionStorage.setItem(key,val);
			},
			unset:function(key) {
				return sessionStorage.removeItem(key);
			}
		}
    });
});
