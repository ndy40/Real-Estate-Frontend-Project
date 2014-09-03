/* 
 * SearchController 
 */
 
 searchModule.controller("SearchFormController", ["$scope", "SearchService",
    function ($scope, SearchService) {
        
        $scope.searchObject = {keywords : ""};
        
        //Search for property
        $scope.searchProperty = function () {
            alert("Search Here" + SearchService.getKeywords());
        };

        // watch for changes in keyword and perform Ajax AutoComplete
        $scope.$watch("searchObject.keywords", function (newValue, oldValue) {
            SearchService.setKeyword(newValue);
        });
        
}]);



