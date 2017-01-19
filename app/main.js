var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'homeCtl'
            })

            .when('/pictures', {
                templateUrl : 'pages/pictures.html',
                controller  : 'pictureCtl'
            })
            .otherwise({redirectTo : '#'});
});




// app.factory('httpService',['$scope', '$rootScope','$http', function($scope, $rootScope, $http){
        
//         const getData = () => {
//             
//             $http({
//                 url: "http://dvns.me/yaniv/clientest/public/explorePictures", 
//                 method: "GET",
//                 params: {path: '/',
//                         headers: {'X­-TOKEN': '2d4e69f4823176197ccf41caa5ee6456'}}
//             }).then(function(response) {
//                 console.log(response);
//             });
//         };
// }]);




