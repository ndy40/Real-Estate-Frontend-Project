/*global define */
/**
 * pcDateAgo Directive - Converts date into days/weeks/months/years ago
 */
define(["../module"], function (app) {
    'use strict';
    app.directive("pcDateAgo", function () {
        return {
            restrict : "EA",
            template : "{{dateAgo}}",
            scope : {
                dateSrc: "="
            },
            link : function (scope) {
                scope.dateAgo = "";
                
                // Watch Model Value & Update View
                scope.$watch('dateSrc', function () {
                    if (scope.dateSrc !== undefined) {
                        var dateTimeSplit = scope.dateSrc.split(" "),
                            dateParts = dateTimeSplit[0].split("-"),
                            createdYear = dateParts[0],
                            createdMonth = dateParts[1] - 1,
                            createdDay = dateParts[2],
                            createdDate =
                                new Date(createdYear, createdMonth, createdDay),
                            currentDate = new Date(),
                            hoursAgo = (currentDate.valueOf() -
                                createdDate.valueOf()) / 3600000;

                        if (hoursAgo < 1) {
                            scope.dateAgo = "less than an hour ago";
                        } else if (hoursAgo < 24) {
                            scope.dateAgo = hoursAgo + " hours ago";
                        } else if (hoursAgo < 168) {
                            scope.dateAgo = Math.floor(hoursAgo / 24) +
                                " day(s) ago";
                        } else if (hoursAgo < 720) {
                            scope.dateAgo =  Math.floor(hoursAgo / 168) +
                                " week(s) ago";
                        } else if (hoursAgo < 8760) {
                            scope.dateAgo =  Math.ceil(hoursAgo / 720) +
                                " month(s) ago";
                        }
                    }
                });
            }
        };
    });
});