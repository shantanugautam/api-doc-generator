'use strict';

angular.module('apiDocGenerator')
  .controller('MainCtrl', function ($scope) {
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
    }];
  });
