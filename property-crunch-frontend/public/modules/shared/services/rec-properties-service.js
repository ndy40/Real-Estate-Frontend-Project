/* 
 * A Recommended Propertiese Service used for getting Reccomended Properties
 */

define(["../module"], function (app) {
    'use strict';
    return app.service('RecPropertyService', ['$http', 'APPURL', function($http, APPURL) {
        
        var RecPropertyService = function () {
            this.results = {};
        };
        
        /**
         * Set & Get Cache 
         */ 
        RecPropertyService.prototype.cacheResults = function (results) {
            'use strict';
            this.results = results;
        };
		
        RecPropertyService.prototype.getCache = function () {
            'use strict';
            return this.results;
        };
		
        /**
         * Get Recommended Properties
         */ 
        RecPropertyService.prototype.getRecProperties = function () {
            var url = APPURL.recProperties + "E14" + "/1/8",
                self = this;
            return $http.get(url);
        };
        
        return new RecPropertyService();
    }]);
});
