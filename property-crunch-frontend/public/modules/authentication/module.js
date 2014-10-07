/* 
 * This Module will contain the authentication logic and services.
 */

(function (define) {
    'use stict';
    define(["angular"], function (app) {
        return app.module("PCAuthModule", [])
            .constant("AUTHURL", "http://pc.frontend/api/auth");
    });
})(define);


