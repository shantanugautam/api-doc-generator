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

    $scope.api = Api.get({apiHref: $routeParams.apiHref}, function(api) {

        $scope.data = api;

        $scope.typeofpackage = function($scope) {
            console.log(api.package);
            console.log(api.package[0]);
            if(api.package === "vcard-resource") {
                return 'resource';
            }
            else if(api.package[0] === "v1/errors") {
                return 'errors';
            }
            else if(api.package[0] === "v1") {
                return 'api';
            }

        };


        $scope.getParams = api.methods;


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
