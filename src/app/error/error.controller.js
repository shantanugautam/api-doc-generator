'use strict';

angular.module('apiDocGenerator')
  .controller('ErrorCtrl', function ($rootScope, $scope, $http, $q, $stateParams, api) {
        var dataurl;
        $q.all([
            api.getMethods.$promise,
            api.getValidationErrors.$promise,
            api.getErrors.$promise
        ]).then(function() { 
            $scope.name = Object.keys($stateParams).map(function (key) {return $stateParams[key]});
            // $scope.errorcodes = api.getErrors();
            api.getErrors().then(function(api){
                $scope.errorcodes = api;
                for (var i = 0;i < $scope.errorcodes.length; i++) {
                    if (($scope.errorcodes[i].name === $scope.name[0])) {
                        var dataurl = $rootScope.endpoint + '/data/' + $scope.errorcodes[i].href;                 
                    } 
                }
                $http.get(dataurl).
                    success(function(data, status, headers, config) {
                        $scope.errordata = data;
                    }).
                    error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    });
            });
            api.getResource().then(function(api){
                $scope.apiresource = api;
            });
            api.getValidationErrors().then(function(api){
                $scope.validationerrorcodes = api;

            });
            api.getMethods().then(function(api){
                $scope.methods = api;
            });
        });
  });
