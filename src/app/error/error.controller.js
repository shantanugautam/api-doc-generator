'use strict';

angular.module('apiDocGenerator')
  .controller('ErrorCtrl', function ($rootScope, $scope, $http, $stateParams, api) {
    // console.log(api.getAll());
    // console.log(api.getErrors());
    // console.log(api.getValidationErrors());
    // console.log(api.getResource());
    // console.log(api.getMethods());
    var dataurl;
    api.getMethods()
        .then(function(res){
            $scope.getMethods = api.getMethodsnew;
        }, function(err){

        });
    api.getValidationErrors()
        .then(function(res){
            $scope.getValidationErrors = api.getValidationErrorsnew;
        }, function(err){

        });
    api.getErrors()
        .then(function(res){
            $scope.errors = api.getErrors;
            $scope.name = Object.keys($stateParams).map(function (key) {return $stateParams[key]});
            for (var i = 0;i < $scope.errors.length; i++) {
                if ((api.getErrors[i].name === $scope.name[0])) {
                    var dataurl = $rootScope.endpoint + '/data/' + api.getErrors[i].href;
                } 
            }
                
            
            // console.log($scope.data);
        }, function(err){

        });
        console.log(dataurl);
    $scope.errordata = function(dataurl){
        console.log(dataurl);
        $http.get(dataurl)
            .success(function(data){
                console.log(data);
            });
    };
    console.log($scope.errordata);


  });
