'use strict';

angular.module('apiDoc')
  .controller('ApiCtrl', function ($scope,$stateParams,$http) {
    $scope.api = [];
    $http.get('/data/api-list.json').success(function(data){
        $scope.api = data;
        console.log(data);
    });
    // console.log(api);
    // $scope.api = $scope.apis[$stateParams.id];
  });
