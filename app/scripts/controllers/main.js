'use strict';

/**
 * @ngdoc function
 * @name angularWaffleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWaffleApp
 */
angular.module('angularWaffleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
