
 angular.module('app')

 .controller('homeCtl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
    'use strict';

    //remove root button from index.html and use home.html
    $('.main-link').css('display','none');


    //request for data from devsense - TODO move to httpService
    $scope.getdata = () => {
        $http({
            url: "http://dvns.me/yaniv/clientest/public/explorePictures", 
            method: "GET",
            params: {path: 'root'},
            headers: {'X-TOKEN' : '2d4e69f4823176197ccf41caa5ee6456'}
        }).then(function(response) {
            console.log(response);
            if (response.status !== 201) {
                alert(response.status);
            }
            else if(response.data.data.children !== 'undefined' && response.data.data.length !== 0) {
                $scope.label = 'Root';
                $scope.rootData = response.data;
                $rootScope.rootData = response.data;
                $scope.numberOfChilds = response.data.data.children.length > 0 ? response.data.data.children.length : 0;
                // computeSpace($scope.numberOfChilds);
            }
        });
    }

    $scope.getdata();

    $scope.goToFolder = (label) => {
        $scope.label = label !== '' ? label : 'Root';

        // TODO move to httpService with suitable flags
        $http({
            url: "http://dvns.me/yaniv/clientest/public/explorePictures", 
            method: "GET",
            params: {path: 'root/'+label},
            headers: {'X-TOKEN' : '2d4e69f4823176197ccf41caa5ee6456'}
        }).then(function(response) {
            console.log(response);
             if (response.status !== 201) {
                alert(response.status);
            }
            else {
                if(response.data.data.children !== 'undefined' && response.data.data.length !== 0) {
                    $scope.rootData = response.data;
                    $rootScope.rootData = response.data;
                    $scope.numberOfChilds = response.data.data.children.length > 0 ? response.data.data.children.length : 0;
                    // computeSpace($scope.numberOfChilds);
                }
                else {
                    alert("Error - This Folder Does Not Have Any Childs");
                    $scope.goToFolder('');//will go to home (root)
                }
            }
        });
    };

    $scope.setChosenImg = (index) => {

        //rootScope as localStorage (e.g localStorage.set('chosenImgIndex',index) )
        $rootScope.chosenImgIndex = index;
    };

    $scope.setAngles = (index) => {

        if(index == 0) {
             return {'margin-right': Math.floor(window.width/$scope.rootData.length)+'px'};
        }
        return {'margin-right':(20*index)+'px'};
        // var toAdd = $scope.angle;
        // $scope.angle += $scope.addToangle;
        // if (toAdd > 180) {
        //     $scope.angle = $scope.addToangle = 15;
        // }
        // return {
        //     'tansform': 'rotate('+toAdd+'deg) translate('+(toAdd/2)+'em)'
        // };
    };

    // const computeSpace = (numberOfItems) => {
    //     var height = screen.height;
    //     $scope.addToangle = height/$scope.numberOfChilds/2;
    //     $scope.angle = $scope.addToangle;

    //     // var width = window.width > screen.width ? window.width : screen.width;
    //     // $scope.rowsToRepeat = [];
    //     // $scope.numberOfRows = (numberOfItems % 5 !== 0) ? (Math.floor(numberOfItems / 5) + 1) : Math.floor(numberOfItems / 5);
    //     // for(var i=0; i < $scope.numberOfRows; i++) {
    //     //     $scope.rowsToRepeat.push(i+1);
    //     // }
    // };


    // $scope.isFromCurrentFive = (index, rowNum) => {
    //     return ((index + 1) <= (rowNum * 5) && (index + 1) > ((rowNum-1) * 5));
    // };

    // $scope.redirectToPics = (picUrl) => {
    //     $rootScope.chosenPicUrl = picUrl;
    //     $route.current.templateUrl = 'pages/pictures.html';
    //     // $state.go('pictures',{obj:yourObj})
    //     // window.location.href = '#picturs';
        
    // };

}]);



