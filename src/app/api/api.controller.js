'use strict';

angular.module('apiDocGenerator')
  .controller('ApiCtrl', function ($rootScope, $scope, $http, $q, $stateParams, api) {
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
                for (var i = 0;i < $scope.methods.length; i++) {
                    if (($scope.methods[i].name.split('/').join('-') === $scope.apiname[0])) {
                        var dataurlapi = $rootScope.endpoint + '/data/' + $scope.methods[i].href;
                        console.log(dataurlapi);                        
                    } 
                }
                $http.get(dataurlapi).
                    success(function(data, status, headers, config) {
                        $scope.methodsdata = data;
                        $scope.methodslist = $scope.methodsdata.methods;
                    }).
                    error(function(data, status, headers, config) {

                    });
            });
        });
  });


angular.module('apiDocGenerator').
directive('myRefresh',function($location,$state){
    return function(scope, element, attrs) {
        element.bind('click',function(){
            location.reload();
            // $state.go($state.current, {}, {reload: true});
            // if(element[0] && element[0].href && element[0].href === $location.absUrl()){
            //     $state.reload();
            // }
        });
    }   
});