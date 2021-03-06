var app = angular.module('fantacalcio', 
    ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
    .when('/squadre', { 
      controller: 'SquadreController', 
      templateUrl: 'views/squadre.html' 
    })
    .when('/squadre/:id', { 
      controller: 'SquadreController', 
      templateUrl: 'views/squadre.html' 
    })
    .when('/calciatori',{
        controller: 'CalendariController',
        templateUrl: 'views/calendario.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

app.config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

app.constant("settings", {
    "ver": "1.0.0",
    "url": "http://localhost/sport_be-master/"
});
