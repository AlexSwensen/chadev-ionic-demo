angular.module('starter.controllers', ['ngStorage'])

.controller('HomeCtrl', function($scope, $localStorage) {

  $scope.$storage = $localStorage;

  $scope.task = {
    text: ''
  }; // Define model

  $scope.add = function () {
    $scope.list.push($scope.task.text); // Add text to $scope.list
    $scope.task.text = ''; // Clear Text
    $scope.$storage.list = $scope.list; //update our list
  };

  $scope.list = $scope.$storage.list || [];
  // set to last storage, or blank arary if storage is blank.

  $scope.deleteItem = function (index) { // function to delete items.
    $scope.list.splice(index, 1);
    $scope.$storage.list = $scope.list; //update our list.
  }


});
