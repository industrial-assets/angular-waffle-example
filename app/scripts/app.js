'use strict';

/**
 * @ngdoc overview
 * @name angularWaffleApp
 * @description
 * # angularWaffleApp
 *
 * Main module of the application.
 */
angular
  .module('angularWaffleApp', ['ngWaffle'])
.controller('ExampleCtrl', function ($scope, $waffle) {

    $scope.title = $waffle.generateTitle();

    $scope.name = $waffle.generateName();

    $scope.waffle1 = $waffle.generateParagraph(2);

    $scope.waffle2 = $waffle.generateParagraph(3);

    $scope.waffle3 = $waffle.generateParagraph(5);

    $scope.waffle4 = $waffle.generateParagraph(1);

    $scope.items = $waffle.generateList(4);

    $scope.quote = $waffle.generateQuote(1);

});
