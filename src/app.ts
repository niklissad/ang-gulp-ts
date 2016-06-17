/// <reference path="../typings/tsd.d.ts" />

module app{
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'app.view1',
            'app.view2'
        ]);
}