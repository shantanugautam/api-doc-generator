'use strict';

angular.module('apiDocGenerator')
  .controller('ErrorCtrl', function ($rootScope, $scope, $http, $q, $stateParams, api) {
    // console.log(api.getAll());
    // console.log(api.getErrors());
    // console.log(api.getValidationErrors());
    // console.log(api.getResource());
    // console.log(api.getMethods());
    
    // api.getMethods()
    //     .then(function(res){
    //         $scope.getMethods = api.getMethodsnew;
    //     }, function(err){

    //     });
    // api.getValidationErrors()
    //     .then(function(res){
    //         $scope.getValidationErrors = api.getValidationErrorsnew;
    //     }, function(err){

    //     });
    // api.getErrors()
    //     .then(function(res){
    //         $scope.errors = api.getErrors;
    //         // console.log($scope.data);
    //     }, function(err){

    //     });

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
                        console.log(dataurl);
                        
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

            api.getValidationErrors().then(function(api){
                $scope.validationerrorcodes = api;

            });

            api.getMethods().then(function(api){
                $scope.methods = api;
            });

            // $scope.getValidationErrors = api.getValidationErrors();
            // console.log($scope.getValidationErrors,$scope.errorcodes);
            // $scope.getMethods = api.getMethodsnew;
            // console.log($scope.errorcodes,$scope.errorcodes.length, $scope.name[0]);
            // for (var i = 0;i < api.getErrors().length; i++) {
            //     if ((api.getErrors[i].name === $scope.name[0])) {
            //         var dataurl = $rootScope.endpoint + '/data/' + api.getErrors[i].href;
            //         console.log(dataurl);
                    
            //     } 
            // } 
        });
        
    // $scope.errordata = function(dataurl){
    //     console.log(dataurl);
    //     $http.get(dataurl)
    //         .success(function(data){
    //             console.log(data);
    //         });
    // };
  });
