(function () {
    "use strict";

    var homePage = angular.module('homePage', []);

    homePage.controller('homeController', ['$scope',
        function ($scope) {
          $scope.keyWords = "Web Developer - Problem Solver - User Experience Designer";
        }]);
})();
