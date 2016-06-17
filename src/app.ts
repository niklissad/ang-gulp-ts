'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ui.router',
    'app.view1',
    'app.view2'
]).
config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

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

}]);
