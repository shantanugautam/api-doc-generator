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
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope){
  	$rootScope.endpoint = '/documentations';
    $rootScope
        .$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
                $("#ui-view").html("");
                $(".page-loading").removeClass("hidden");
        });

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){ 
                $(".page-loading").addClass("hidden");
        });
  })
;
