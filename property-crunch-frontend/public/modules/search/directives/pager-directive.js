/*global define */
/**
 * pcPager Directive - Pagination for the Search Page
 */

define(["../module.min"], function (app) {
    'use strict';

    app.directive("pcPager", ["SearchService", "$anchorScroll",
        function (SearchService, $anchorScroll) {

            return {
                restrict : "E",
                templateUrl : "./modules/search/directives/pager.html",
                scope : {
                    properties: "=",
                    totalResults: "=",
                    callback: "="
                },
                link : function (scope) {
                    /**
                    * Provides Pagination for The Search Results. It's init in
                    * loadPropertyTable();
                    */
                    scope.initPagination = function () {
                        // Get currentPage and resultsPerPage from SearchService
                        scope.currentPage = SearchService.getCurrentPage();
                        scope.resultsPerPage =
                                SearchService.getResultsPerPageValue();
                        scope.pagesArray = [];

                        // Calculate Total Pages
                        scope.totalPages = scope.totalResults <
                                scope.resultsPerPage ? 1 :
                                    Math.ceil(scope.totalResults /
                                        scope.resultsPerPage);

                        // Create Pages, Set Active States & Hide First/Last
                        scope.createPages();
                        scope.setActivePage(scope.currentPage);
                        scope.hideFirstOrLast();
                    };

                    /**
                     * Being Used in the Loops of createPages() function
                     */
                    scope.pushNewPage = function (i) {
                        scope.pagesArray.push({
                            num: i + 1,
                            isActive: false
                        });
                    };

                    /**
                     * Create pages for the pagination and store them in
                     * scope.pagesArray
                     */
                    scope.createPages = function () {
                        var i, j, k;
                        // If there are more than 5 pages - Limit to 5
                        if (scope.totalPages > 5) {
                            // If Current Page + 4 is Larger than Total Pages,
                            // Show Last 5 Pages
                            if (scope.currentPage + 4 > scope.totalPages) {
                                // Start Loop at Total Pages-5 & End Loop at
                                // Total Pages
                                for (i = scope.totalPages - 5; i <
                                        scope.totalPages; i += 1) {
                                    scope.pushNewPage(i);
                                }
                            } else {
                                // Else Show Current Page + Next 4 Pages
                                // Start Loop at Current Page (pageNum-1 to
                                // adjust index) & End Loop at CurrentPage + 4
                                for (j = scope.currentPage - 1; j <
                                        scope.currentPage + 4; j += 1) {
                                    scope.pushNewPage(j);
                                }
                            }
                        } else {
                            // There are less than or equal to 5 pages so no
                            // need to limit to 5
                            for (k = 0; k < scope.totalPages; k += 1) {
                                scope.pushNewPage(k);
                            }
                        }
                    };

                    /**
                     * Set Active State of the Current Page
                     */
                    scope.setActivePage = function (currentPage) {
                        var i;
                        if (scope.pagesArray.length > 0) {
                            // Default Active
                            if (currentPage === 1) {
                                // Using pagesArray[0] because it's faster
                                scope.pagesArray[0].isActive = true;
                            } else {
                                for (i = 0; i < scope.pagesArray.length;
                                        i += 1) {
                                    if (scope.pagesArray[i].num ===
                                            currentPage) {
                                        scope.pagesArray[i].isActive = true;
                                    }
                                }
                            }
                        }
                    };

                    // Hide/ Show First or Last Pages
                    scope.hideFirstOrLast = function () {
                        // Hide First if First Page
                        if (scope.currentPage === 1
                                || (scope.currentPage !== 1 &&
                                scope.totalPages <= 5)) {
                            scope.first = false;
                        } else {
                            scope.first = true;
                        }

                        // Hide Last if Last Page
                        if (scope.currentPage === scope.totalPages) {
                            scope.last = false;
                        } else {
                            scope.last = true;
                        }
                    };

                    // Change Page
                    scope.changePage = function (currentPage) {
                        // Changing Current Page
                        scope.currentPage = currentPage;
                        SearchService.setCurrentPage(currentPage);
                        // Init getProperties() function from Controller 
                        scope.callback();
                        // Scroll To Top
                        $anchorScroll();  
                    };

                    /**
                    *  initPagination once Properties Data has been loaded from
                    *  the Service
                    */
                    scope.$watch('properties', function () {
                        scope.initPagination();
                    });

                }
            };
        }]);
});