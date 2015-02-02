/*global define */
/**
 * Favorites Controller for the pcFavorites Module
 */

define(["../module"], function (app) {
    'use strict';
    app.controller("FavouritesCtrl", ["$scope", "FavService", "UserModel", "$location", 
        function ($scope, FavService, UserModel, $location) {
        
        /**
        * Send to Login Page if Not Logged in
        */
        if (!UserModel.isLoggedIn) {
            $location.path("/login");
        }
        
        /**
         * Object to Store Data
         */
        $scope.favList = {
            properties: []         // To store Properties
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
                    FavService.getFavourites(UserModel.favourites)
                        .success($scope.loadFavTable);
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
            FavService.cache(data);
        };
            
        /**
        * Init getFavourites
        */
        $scope.getFavourites();
        
    }]);
});
