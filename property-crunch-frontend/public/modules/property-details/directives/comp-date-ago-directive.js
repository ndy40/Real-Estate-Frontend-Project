/*global define */
/**
 * pcCompDateAgo Directive - Custom Date Ago Directive for Comparable dates.
 * Converts date into days/weeks/months/years ago
 */
define(["../module.min"], function (app) {
    'use strict';
    app.directive("pcCompDateAgo", function () {
        return {
            restrict : "EA",
            template : "{{compDateAgo}}",
            scope : {
                dateSrc: "="
            },
            link : function (scope) {
                scope.compDateAgo = "";
                
                // Watch Model Value & Update View
                scope.$watch('dateSrc', function () {
                    if (scope.dateSrc !== undefined) {
                        //2015-02-20 22:41:03
                        var monthMap = {
                            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
                        };
                        var dayDateSplit    = scope.dateSrc.split(", "),
                            dateSplit       = dayDateSplit[1].split(" "),
                            day             = dateSplit[0],
                            year            = dateSplit[2],
                            monthStr        = dateSplit[1],
                            month           = monthMap[monthStr],
                            pastDate        = new Date(year, month, day),
                            currentDate     = new Date(),
                            hoursAgo        = (currentDate.valueOf() -
                                pastDate.valueOf()) / 3600000;
                            
                        if (hoursAgo < 1) {
                            scope.compDateAgo = "less than an hour ago";
                        } else if (hoursAgo < 24) {
                            scope.compDateAgo = hoursAgo + " hours ago";
                        } else if (hoursAgo < 168) {
                            scope.compDateAgo = Math.floor(hoursAgo / 24) +
                                " day(s) ago";
                        } else if (hoursAgo < 720) {
                            scope.compDateAgo =  Math.floor(hoursAgo / 168) +
                                " week(s) ago";
                        } else if (hoursAgo < 8760) {
                            scope.compDateAgo =  Math.ceil(hoursAgo / 720) +
                                " month(s) ago";
                        } else if (hoursAgo < 87600) {
                            scope.compDateAgo =  Math.ceil(hoursAgo / 8760) +
                                " year(s) ago";
                        } else if (hoursAgo > 87600){
                            scope.compDateAgo = "10 years ago";
                        }
                    }
                });
            }
        };
    });
});