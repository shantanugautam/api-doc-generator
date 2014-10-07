'use strict';

/**
 * @ngdoc overview
 * @name apiGeneratorApp
 * @description
 * # apiGeneratorApp
 *
 * Main module of the application.
 */

var apiGeneratorApp = angular.module('apiGeneratorApp',[
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'apiGeneratorControllers',
    'apiGeneratorServices'
]);

apiGeneratorApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/apis', {
        templateUrl: 'partials/api-list.html',
        controller: 'ApiListCtrl'
      })
      .when('/apis/:apiHref.json', {
        templateUrl: 'partials/api-detail.html',
        controller: 'ApiDetailCtrl'
      })
      .otherwise({
        templateUrl: 'partials/main.html',
        redirectTo: '/'
      });
}]);
