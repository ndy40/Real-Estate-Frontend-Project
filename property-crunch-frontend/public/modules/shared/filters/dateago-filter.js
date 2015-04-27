/*global define */
/* 
 * Custom DateAgo Filter
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

define(["../module"], function (app) {
    'use strict';
    return app.filter('dateago', function () {
        return function (input) {
            if (input !== undefined) {
                var dateSplit = input.split(" "),
                    cleanDate = dateSplit[0],
                    newDate = new Date(cleanDate),
                    parsedDate = Date.parse(newDate),
                    currentDate = Date.parse(new Date()),
                    hoursAgo = Math.floor((currentDate - parsedDate) / 3600000),
                    daysAgo = Math.floor(hoursAgo / 24),
                    weeksAgo = Math.floor(daysAgo / 7),
                    monthsAgo = Math.floor(daysAgo / 30),
                    yearsAgo = Math.floor(daysAgo / 365);

                if (hoursAgo < 24) {
                    return hoursAgo + " hour(s) ago";
                } else if (hoursAgo < 168) {
                    return daysAgo + " day(s) ago";
                } else if (hoursAgo < 720) {
                    return weeksAgo + " week(s) ago";
                } else if (hoursAgo < 8760) {
                    return monthsAgo + " month(s) ago";
                } else {
                    return yearsAgo + " year(s) ago";
                }
            }
        };
    })
});