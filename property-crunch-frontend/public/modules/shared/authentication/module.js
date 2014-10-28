/* 
 * This Module will contain the authentication logic and services.
 */

(function (define) {
    'use stict';
    define(["angular", "cookies"], function (app) {
        return app.module("PCAuthModule", ["ngCookies"])
            .constant("AUTHURL", "/api/auth");
    });
})(define);


