angular.module('app')

.controller('pictureCtl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    'use strict';

    //data from home controller instead of making new request
    if ($rootScope.rootData !== 'undefined') {

        //get the requested pic
        $scope.imgObj = $rootScope.rootData.data.children[$rootScope.chosenImgIndex];

        //get the rest of the folder's pics using lodash filter
        $scope.photoData = _.filter($rootScope.rootData.data.children, (obj) => {
            return obj.type === 1 && $scope.imgObj.label !== obj.label;
        });
    }
    
    $scope.switchPhoto = (photo) => {
        var temp = $scope.imgObj;
        $scope.imgObj = photo;
        $scope.photoData = _.filter($rootScope.rootData.data.children, (obj) => {
            return obj.type === 1 && $scope.imgObj.label !== obj.label;
        });
    };

   
}]);


