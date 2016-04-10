angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {


  $scope.add = function () {
    $scope.list.push('thing ' + ($scope.list.length + 1));
  };

  $scope.list = [
    'thing 1',
    'thing 2',
    'thing 3'
  ];


});
