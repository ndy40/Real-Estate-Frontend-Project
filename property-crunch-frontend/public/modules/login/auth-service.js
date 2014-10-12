/* 
 * An Authentication  service .
 */

define(["./module"], function (app) {
    'use strict';
	return app.factory('authService', ["$http", function($http) {
            return{
                auth:function(credentials){
                    var authUser = $http({method:'POST',url:'api/login/auth',params:credentials});
                    return authUser;
                }
            }
    }]);
});

