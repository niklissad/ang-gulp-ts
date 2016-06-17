/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    'use strict';
    angular
        .module('app', [
        'ui.router',
        'app.view1',
        'app.view2'
    ]);
})(app || (app = {}));
