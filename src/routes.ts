/// <reference path="../typings/tsd.d.ts" />

module app {
    'use strict';

    function routes($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $urlRouterProvider.otherwise('/view1');

        $stateProvider
            .state('view1', {
                url: "/view1",
                templateUrl: "views/view1/view1.html"
            })
            .state('view2', {
                url: "/view2",
                templateUrl: "views/view2/view2.html",
            });

    }

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular
        .module('app')
        .config(routes);
}