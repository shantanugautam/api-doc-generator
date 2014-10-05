'use strict';

/**
 * @ngdoc service
 * @name apiGeneratorApp.api
 * @description
 * # api
 * Service in the apiGeneratorApp.
 */
// angular.module('apiGeneratorApp')
//   .service('Api', function api($resource) {
//         return $resource('scripts/output/data/:apiId.json', {}, {
//           query: {method:'GET', params:{apiId:'manifest'}, isArray:true}
//         });
//   });


var apiGeneratorServices = angular.module('apiGeneratorServices', ['ngResource']);

apiGeneratorServices.factory('Api', ['$resource', function($resource){
    return $resource('apis/:apiHref.json', {}, {
      query: {method:'GET', params:{apiHref:'apis'}, isArray:true}
    });
}]);
