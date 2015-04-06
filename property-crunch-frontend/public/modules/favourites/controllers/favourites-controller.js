/*global define */
/**
 * Favorites Controller for the pcFavorites Module
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("FavouritesCtrl", ["$scope", "$rootScope", "FavService",
        "UserModel", "$location",
            function ($scope, $rootScope, FavService, UserModel, $location) {
        
        /**
        * Send to Login Page if Not Logged in
        */
        if (!UserModel.isLoggedIn) {
            $location.path("/sign/in");
        }
        
        /**
         * Object to Store Data
         */
        $scope.favList = {
            properties  : [],         // To store Properties
            status      : false,
            zeroList    : false
        };

        /**
         * Get Properties from User Model Service
         *
         * On Success Loads Property Table Otherwise displays error in
         * $scope.searchObject.status
         */
        $scope.getFavourites = function () {
            if (UserModel.isLoggedIn) {
                if (FavService.propertyData === null) {
                    if (UserModel.favourites.length > 0) {
                        FavService.getFavourites(UserModel.favourites)
                            .success($scope.loadFavTable);
                    } else {
                        $scope.favList.status = true;
                        $scope.favList.zeroList = true;
                    }
                } else {
                    // Load Cache
                    $scope.loadFavTable(FavService.getCache());
                }
            }
        };
        
        /**
         * Load Properties onto the loadFavTable.
         *
         * @param Object data
         * @returns {undefined}
         */
        $scope.loadFavTable = function (data) {
            $scope.favList.properties = data;
            $scope.favList.status = true;
            $scope.favList.zeroList = false;
            FavService.cache(data);
        };
                
        /**
        * Init getFavourites
        */
        $scope.getFavourites();
        
        
        /**
        * Remove From Favourites
        */
        $scope.removeFromFav = function(propertyId) {
            UserModel.removeFav(propertyId)
                .success(function() {
                    UserModel.removeFavFE(propertyId);
                    FavService.clearCache();
                    $scope.getFavourites();
                    $rootScope.$broadcast("favUpdated");
                });
        };

        $scope.$on("favUpdated", function () {
            if ($scope.favUpdate) {
                $scope.favUpdate = false;
            } else {
                $scope.favUpdate = true;
            }
        });
        
    }]);
});
