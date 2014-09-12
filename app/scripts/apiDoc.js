'use strict';

angular.module('apiDoc', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'yaru22.md'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('apis', {
        url: '/apis',
        templateUrl: 'partials/api.html',
        controller: 'ApiCtrl'
      });

    $urlRouterProvider.otherwise('/apis');
  })
;
