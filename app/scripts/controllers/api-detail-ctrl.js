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
    // $scope.go = function (page) {
    //     $location.path('/'+page);
    // };

    $scope.go = function( path ){
        $location.path(path);
    }

    $scope.api = Api.get({apiHref: $routeParams.apiHref}, function(api) {
      // $scope.mainImageUrl = api.images[0];
      // console.log($scope.api.methods);
      // $scope.methodtype = api.method;
        // api.read('data.json', $scope);

        // $scope.name = "Params";
        // $scope.$on("jsonDone", function () {
        //     $scope.nestedObj = $scope.data.level1.level2;
        //     $scope.getLen = function () {
        //         return $scope.data.level1.level2.length;
        //     };
        // });
        //

        // console.log(api.package);
        //
        //
        //
        $scope.data = api;
        // console.log(api.package);



        $scope.typeofpackage = function($scope) {
            if(api.package[0] === "v1/errors") {
                return 'errors';
            }
            else if(api.package[0] === "v1") {
                return 'api';
            }
            else if(api.package[0] === "vcard-resource") {
                return 'resource';
            }
            else {
                return 'null';
            }
        };

        console.log($scope.typeofpackage(api));
        // $scope.typeofpackage = function (thing) {
        //     switch(typeof thing){
        //         case "object":
        //             if(Object.prototype.toString.call(thing) === "[object Array]"){
        //                 return 'array'
        //             } else if (thing == null) {
        //                 return 'null'
        //             } else {
        //                 return 'hash'
        //             }
        //         case "string":
        //             if(urlRegEx.test(thing)){
        //                 return "url"
        //             } else {
        //                 return "string"
        //             }
        //         default:
        //             return typeof thing
        //     }
        // }

        // console.log($scope.typeofpackage($scope));

        // $scope.getParam  = JSON.stringify(api.methods[0].response);

        $scope.getParams = api.methods;


        // $scope.getParamsInfos =[];

        // angular.forEach($scope.getParams, function(getParamsInfo) {
        //     $scope.getParamsInfos.push(getParamsInfo);
        // });

        // $scope.getParamsInfo = function($scope.getParams) {
        //     $scope.getParamsInfos = [];
        //     angular.forEach($scope.getParams, function(getParamsInfo) {
        //         $scope.getParamsInfos.push(getParamsInfo);
        //     });
        // };
        // console.log(JSON.stringify($scope.getParams) ,$scope.getParams.hasOwnProperty("key"));


        // console.log($scope.getParams, $scope.hasChild);

        // $scope.getParam.section = api.methods.sectionNumber;

        // $scope.index = function() {
        //   return $scope.$parentNodesScope.$modelValue.indexOf($scope.$modelValue);
        // };

        $scope.isEmpty = function() {
          return ($scope.$nodesScope && $scope.$nodesScope.$modelValue && $scope.$nodesScope.$modelValue.length === 0);
        };

        // $scope.isSibling = function(targetNode) {
        //   return $scope.$parentNodesScope === targetNode.$parentNodesScope;
        // };

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

        // $scope.siblings = function() {
        //   return $scope.$parentNodesScope.childNodes();
        // };

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

        // var subDepth = 0;
        // var countSubDepth = function(scope) {
        //   var count = 0;
        //   var nodes = scope.childNodes();
        //   for (var i = 0; i < nodes.length; i++) {
        //     var childNodes = nodes[i].$childNodesScope;
        //     if (childNodes) {
        //       count = 1;
        //       countSubDepth(childNodes);
        //     }
        //   }
        //   subDepth += count;
        // };

        // $scope.maxSubDepth = function() {
        //   subDepth = 0;
        //   if ($scope.$childNodesScope) {
        //     countSubDepth($scope.$childNodesScope);
        //   }

        //   return subDepth;
        // };

        // $scope.getParamLegth = false;

        // console.log($scope.getParam, $scope.getParam.section);

        // if ($scope.getParam.length > 0) {
        //     $scope.getParamLegth = true;
        // }


        // $scope.postParam  = api.methods[1].response;

        // console.log($scope.getParamResponse);
      // if($scope.api.methods)
    });
}]);

// 'use strict';

// /**
//  * @ngdoc function
//  * @name apiGeneratorApp.controller:ApiDetailCtrl
//  * @description
//  * # ApiDetailCtrl
//  * Controller of the apiGeneratorApp
//  */
// // angular.module('apiGeneratorApp')
// //   .controller('ApiDetailCtrl', function ($scope, $routeParams, ApiResults) {
// //     $scope.api = ApiResults.get({apiId : $routeParams.apiId}, function(api){

// //     });
// //     console.log($scope.api);
// //   });


// apiGeneratorControllers.controller('ApiDetailCtrl', ['$location', '$scope', '$routeParams', 'Api', function($location, $scope, $routeParams, Api){
//     $scope.apis = Api.query();
//     $scope.orderProp = 'name';

//     // $scope.currentPage = "/apis/:apiHref";
//     // $scope.go = function (page) {
//     //     $location.path('/'+page);
//     // };

//     $scope.go = function( path ){
//         $location.path(path);
//     }

//     $scope.api = Api.get({apiHref: $routeParams.apiHref}, function(api) {
//       // $scope.mainImageUrl = api.images[0];
//       // console.log($scope.api.methods);
//       // $scope.methodtype = api.method;


//         // $scope.getParam  = JSON.stringify(api.methods[0].response);

//         $scope.getParams = api.methods;

//         // $scope.getParamsresponse = api.method.response;

//         // $scope.getParamsrequests = api.method.requests;

//         $scope.getParamsInfos =[];

//         // angular.forEach($scope.getParams, function(getParamsInfo) {
//         //     $scope.getParamsInfos.push(getParamsInfo);
//         // });

//         // $scope.getParamsInfo = function($scope.getParams) {
//         //     $scope.getParamsInfos = [];
//         //     angular.forEach($scope.getParams, function(getParamsInfo) {
//         //         $scope.getParamsInfos.push(getParamsInfo);
//         //     });
//         // };
//         console.log($scope.getParams);


//         // $scope.type = function (thing) {
//         //     switch(typeof thing){
//         //         case "object":
//         //             if(Object.prototype.toString.call(thing) === "[object Array]"){
//         //                 return 'array'
//         //             } else if (thing == null) {
//         //                 return 'null'
//         //             } else {
//         //                 return 'hash'
//         //             }
//         //         case "string":
//         //             if(urlRegEx.test(thing)){
//         //                 return "url"
//         //             } else {
//         //                 return "string"
//         //             }
//         //         default:
//         //             return typeof thing
//         //     }
//         // }


//         // console.log($scope.getParams, $scope.hasChild);

//         // $scope.getParam.section = api.methods.sectionNumber;

//         $scope.index = function() {
//           return $scope.$parentNodesScope.$modelValue.indexOf($scope.$modelValue);
//         };

//         $scope.isEmpty = function() {
//           return ($scope.$nodesScope && $scope.$nodesScope.$modelValue && $scope.$nodesScope.$modelValue.length === 0);
//         };

//         // $scope.isSibling = function(targetNode) {
//         //   return $scope.$parentNodesScope === targetNode.$parentNodesScope;
//         // };

//         // $scope.isChild = function(targetNode) {
//         //   var nodes = $scope.childNodes();
//         //   return nodes && nodes.indexOf(targetNode) > -1;
//         // };

//         $scope.prev = function() {
//           var index = $scope.index();
//           if (index > 0) {
//             return $scope.siblings()[index - 1];
//           }

//           return undefined;
//         };

//         // window.sc = $scope

//         // $scope.siblings = function() {
//         //   return $scope.$parentNodesScope.childNodes();
//         // };

//         $scope.childNodesCount = function() {
//           return (angular.isDefined($scope.childNodes())) ? $scope.childNodes().length : 0;
//         };

//         $scope.hasChild = function() {
//           return $scope.childNodesCount() > 0;
//         };

//         // $scope.childNodes = function() {
//         //   return (angular.isDefined($scope.$childNodesScope) && angular.isDefined($scope.$childNodesScope.$modelValue)) ?
//         //          $scope.$childNodesScope.childNodes() : undefined;
//         // };

//         // var subDepth = 0;
//         // var countSubDepth = function(scope) {
//         //   var count = 0;
//         //   var nodes = scope.childNodes();
//         //   for (var i = 0; i < nodes.length; i++) {
//         //     var childNodes = nodes[i].$childNodesScope;
//         //     if (childNodes) {
//         //       count = 1;
//         //       countSubDepth(childNodes);
//         //     }
//         //   }
//         //   subDepth += count;
//         // };

//         // $scope.maxSubDepth = function() {
//         //   subDepth = 0;
//         //   if ($scope.$childNodesScope) {
//         //     countSubDepth($scope.$childNodesScope);
//         //   }

//         //   return subDepth;
//         // };

//         // $scope.getParamLegth = false;

//         // console.log($scope.getParam, $scope.getParam.section);

//         // if ($scope.getParam.length > 0) {
//         //     $scope.getParamLegth = true;
//         // }


//         // $scope.postParam  = api.methods[1].response;

//         // console.log($scope.getParamResponse);
//       // if($scope.api.methods)
//     });
// }]);
