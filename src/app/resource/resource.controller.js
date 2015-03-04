'use strict';

angular.module('apiDocGenerator')
  .controller('ResourceCtrl', function ($rootScope, $scope, $http, $q, $stateParams, api) {
        var dataurl;
        $q.all([
            api.getMethods().$promise,
            api.getValidationErrors().$promise,
            api.getErrors().$promise,
            api.getResource().$promise
        ]).then(function() { 
            $scope.apiname = Object.keys($stateParams).map(function (key) {return $stateParams[key]});
            console.log($scope.apiname);
            api.getErrors().then(function(api){
                $scope.errorcodes = api;
            });
            api.getValidationErrors().then(function(api){
                $scope.validationerrorcodes = api;
            });
            api.getResource().then(function(api){
                $scope.apiresource = api;
            });
            api.getMethods().then(function(api){
                $scope.methods = api;
            });
        });
  });
