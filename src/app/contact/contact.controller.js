'use strict';

angular.module('apiDocGenerator')
  .controller('ContactCtrl', function ($rootScope, $scope, $http, $q, $stateParams, api) {
        var dataurl;
        // $q.all([
        //     api.getMethods().$promise,
        //     api.getValidationErrors().$promise,
        //     api.getErrors().$promise,
        //     api.getResource().$promise
        // ]).then(function() { 
        //     $scope.resourcename = Object.keys($stateParams).map(function (key) {return $stateParams[key]});
        //     api.getErrors().then(function(api){
        //         $scope.errorcodes = api;
        //     });
        //     api.getValidationErrors().then(function(api){
        //         $scope.validationerrorcodes = api;
        //     });
        //     api.getResource().then(function(api){
        //         $scope.apiresource = api;
        //         console.log($scope.apiresource);
        //         $http.get($rootScope.endpoint + '/data/' + $scope.apiresource[0].href).
        //             success(function(data, status, headers, config) {
        //                 $scope.resourcedata = data;
        //             }).
        //             error(function(data, status, headers, config) {

        //             });
        //     });
        //     api.getMethods().then(function(api){
        //         $scope.methods = api;
        //     });
        // });
  });
