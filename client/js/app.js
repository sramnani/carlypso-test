var app = angular.module('app',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/apps.html'
        })
        .state('devices', {
            url: '/devices',
            templateUrl: '/views/devices.html'
        })



});