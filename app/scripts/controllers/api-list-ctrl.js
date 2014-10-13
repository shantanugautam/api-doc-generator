'use strict';

/**
 * @ngdoc function
 * @name apiGeneratorApp.controller:ApiListCtrl
 * @description
 * # ApiListCtrl
 * Controller of the apiGeneratorApp
 */
// angular.module('apiGeneratorApp')
//   .controller('ApiListCtrl', function ($scope, ApiResults) {
//     $scope.apis = ApiResults.query();
//   });

apiGeneratorControllers.controller('ApiListCtrl', ['$scope','yaru22.md', 'Api', function($scope, Api){
    $scope.apis = Api.query();
    $scope.orderProp = 'name';
}]);
