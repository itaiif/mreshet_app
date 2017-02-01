var app = angular.module('app', ['ngRoute', 'ngSanitize', 'adaptv.adaptStrap']);

app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/mreshet.html',
                controller  : 'mainCtl'
            })
            .otherwise({redirectTo : '#'});
});



