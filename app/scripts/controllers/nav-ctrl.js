'use strict';

// /**
//  * @ngdoc function
//  * @name apiGeneratorApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the apiGeneratorApp
//  */

// var apiGeneratorControllers = angular.module('apiGeneratorControllers', []);


apiGeneratorControllers.controller('NavCtrl', ['$scope', '$location', function($location, $scope){
    $scope.currentPage = "home";
    $scope.go = function (page) {
        $location.path(page);
    };
}]);

// // angular.module('apiGeneratorApp')
// //   .controller('MainCtrl', function ($scope) {

// //   });
