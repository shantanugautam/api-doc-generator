'use strict';

/**
 * @ngdoc function
 * @name apiGeneratorApp.controller:ApiDetailCtrl
 * @description
 * # ApiDetailCtrl
 * Controller of the apiGeneratorApp
 */

apiGeneratorControllers.controller('ApiDetailCtrl', ['$location', '$scope', '$routeParams', 'Api', function($location, $scope, $routeParams, Api){
    $scope.apis = Api.query();
    $scope.orderProp = 'name';

    $scope.currentPage = "/apis/:apiHref";

    $scope.go = function( path ){
        $location.path(path);
    }

    $scope.isActive = function (viewLocation) {
        var pattern = '/' + viewLocation,
            re = new RegExp(pattern);
        return re.test($location.path());
    };


    $scope.api = Api.get({apiHref: $routeParams.apiHref}, function(api) {

        $scope.data = api;
        $scope.getParams = api.methods;

        $scope.typeofpackage = function($scope) {
            if(api.name === "v1") {
                return 'resource';
            }
            else if(api.package[0] === "v1/errors") {
                return 'errors';
            }
            else if(api.package[0] === "v1") {
                return 'api';
            }

        };

        $scope.isEmpty = function() {
          return ($scope.$nodesScope && $scope.$nodesScope.$modelValue && $scope.$nodesScope.$modelValue.length === 0);
        };

        $scope.isChild = function(targetNode) {
          var nodes = $scope.childNodes();
          return nodes && nodes.indexOf(targetNode) > -1;
        };

        $scope.prev = function() {
          var index = $scope.index();
          if (index > 0) {
            return $scope.siblings()[index - 1];
          }

          return undefined;
        };


        $scope.childNodesCount = function() {
          return (angular.isDefined($scope.childNodes())) ? $scope.childNodes().length : 0;
        };

        $scope.hasChild = function() {
          return $scope.childNodesCount() > 0;
        };

        $scope.childNodes = function() {
          return (angular.isDefined($scope.$childNodesScope) && angular.isDefined($scope.$childNodesScope.$modelValue)) ?
                 $scope.$childNodesScope.childNodes() : undefined;
        };
    });
}]);
