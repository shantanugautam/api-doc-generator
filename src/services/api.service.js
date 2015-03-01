'use strict';

angular.module('apiDocGenerator')
    .service('api', function($http, $q, $rootScope) {
        var api = this;
        api.getAll = {};
        api.getErrors = {};

        api.getAll  = function() {
            var defer = $q.defer();

            $http.get($rootScope.endpoint + '/manifest.json')
                .success(function(res){
                    api.getAll = res;
                    defer.resolve(res);
                })
                .error(function(err,status){
                    defer.reject(err);
                });

            return defer.promise

        };
        api.getErrors  = function() {
            var defer = $q.defer();

            $http.get($rootScope.endpoint + '/manifest.json')
                .success(function(res){
                    api.getErrors = res;
                    api.getErrorsnew = [];
                    // console.log(api.getErrors)
                    for (var i = 0;i < res.length; i++) {
                        if ((api.getErrors[i].package[0] === 'v1/errors')) {
                            api.getErrorsnew.push(res[i]);
                        } 
                    }
                    api.getErrors = api.getErrorsnew
                    defer.resolve(api.getErrorsnew);
                })
                .error(function(err,status){
                    defer.reject(err);
                });

            return defer.promise

        };
        api.getValidationErrors  = function() {
            var defer = $q.defer();

            $http.get($rootScope.endpoint + '/manifest.json')
                .success(function(res){
                    api.getValidationErrors = res;
                    api.getValidationErrorsnew = [];
                    for (var i = 0;i < res.length; i++) {
                        if ((api.getValidationErrors[i].name === 'Validation Errors')) {
                            api.getValidationErrorsnew.push(res[i]);
                        } 
                    }
                    defer.resolve(api.getValidationErrorsnew);
                })
                .error(function(err,status){
                    defer.reject(err);
                });

            return defer.promise

        };
        api.getResource  = function() {
            var defer = $q.defer();

            $http.get($rootScope.endpoint + '/manifest.json')
                .success(function(res){
                    api.getResource = res;
                    api.getResourcenew = [];
                    for (var i = 0;i < res.length; i++) {
                        if ((api.getResource[i].name === 'vcard-resource')) {
                            api.getResourcenew.push(res[i]);
                        } 
                    }
                    defer.resolve(api.getResourcenew);
                })
                .error(function(err,status){
                    defer.reject(err);
                });

            return defer.promise

        };
        api.getMethods  = function() {
            var defer = $q.defer();

            $http.get($rootScope.endpoint + '/manifest.json')
                .success(function(res){
                    api.getMethods = res;
                    api.getMethodsnew = [];
                    for (var i = 0;i < res.length; i++) {
                        if ((api.getMethods[i].package[0] === 'v1')) {
                            api.getMethodsnew.push(res[i]);
                        } 
                    }
                    defer.resolve(api.getMethodsnew);
                })
                .error(function(err,status){
                    defer.reject(err);
                });

            return defer.promise

        };
        // apiFactory.getErrors  = function() {
        //     return $http.get('documentations/manifest.json').success(function(data){
        //         for (var i = 0;i < data.length; i++) {
        //           if (data[i].package[0] == 'v1/errors') {
        //             apiFactory.getErrors.push(data[i]);
        //           }
        //         };
        //     });
        // };

        return api;
    });