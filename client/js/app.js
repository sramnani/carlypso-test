var app = angular.module('app',['ui.router','jonniespratley.angularWebSpeechDirective']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/apps.html'
        })
        .state('home.apps', {
            url: '/apps',
            templateUrl: '/views/app-details.html'
        })
        .state('devices', {
            url: '/devices',
            templateUrl: '/views/devices.html'
        })




    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);
});
