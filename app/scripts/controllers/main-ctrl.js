'use strict';

/**
 * @ngdoc function
 * @name apiGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiGeneratorApp
 */

var apiGeneratorControllers = angular.module('apiGeneratorControllers', []);


apiGeneratorControllers.controller('MainCtrl', ['$scope', 'Api', function($scope, Api){
    $scope.apis = Api.query();
    $scope.orderProp = 'age';
}]);

// angular.module('apiGeneratorApp')
//   .controller('MainCtrl', function ($scope) {

//   });
