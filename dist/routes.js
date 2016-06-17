/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    'use strict';
    function routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/view1');
        $stateProvider
            .state('view1', {
            url: "/view1",
            templateUrl: "views/view1/view1.html"
        })
            .state('view2', {
            url: "/view2",
            templateUrl: "views/view2/view2.html"
        });
    }
    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    angular
        .module('app')
        .config(routes);
})(app || (app = {}));
