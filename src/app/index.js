'use strict';

angular.module('apiDocGenerator', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router','yaru22.md'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('api', {
        url: '/api/:name',
        templateUrl: 'app/api/api.html',
        controller: 'ApiCtrl'
      })
      .state('resource', {
        url: '/resource',
        templateUrl: 'app/resource/resource.html',
        controller: 'ResourceCtrl'
      })
      .state('error', {
        url: '/error/:name',
        templateUrl: 'app/error/error.html',
        controller: 'ErrorCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope){
  	$rootScope.endpoint = '/documentations';
  })
;
