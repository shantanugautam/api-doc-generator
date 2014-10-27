'use strict';

/**
 * @ngdoc function
 * @name apiGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiGeneratorApp
 */

var apiGeneratorControllers = angular.module('apiGeneratorControllers', []);


apiGeneratorControllers.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('apis/main.json').success(function(data){
        $scope.info = data;
        console.log(data);
    });

    $scope.info = [
    {
        "playgroundUrl": "https://sg-uat-5.mmvpay.com/playground",
        "features": [
            {
              "title": "Places",
              "description": "Seamlessly empower fully researched growth strategies and interoperable internal sources.",
              "imgPath": "images/pin.png"
            },
            {
              "title": "Settings",
              "description": "Collaboratively administrate turnkey channels whereas virtual e-tailers an other media. ",
              "imgPath": "images/settings.png"
            },
            {
              "title": "Easy",
              "description": "Interactively procrastinate high-payoff content without backward-compatible data. ",
              "imgPath": "images/easy.png"
            },
            {
              "title": "Global",
              "description": "Credibly innovate granular internal or 'organic' sources whereas high standards in web-readiness. ",
              "imgPath": "images/saturn.png"
            }
        ]
    }
    ];
}]);
