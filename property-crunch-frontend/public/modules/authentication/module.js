/* 
 * This Module will contain the authentication logic and services.
 */

(function (define) {
    'use stict';
    define(["angular", "cookies", "localStorage"], function (app) {
        return app.module("PCAuthModule", ["ngCookies", "localStorageModule"])
            .constant("AUTHURL", "http://pc.frontend/api/auth");
    });
})(define);


