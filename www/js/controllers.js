angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

  $scope.task = {
    text: ''
  }; // Define model

  $scope.add = function () {
    $scope.list.push($scope.task.text); // Add text to $scope.list
    $scope.task.text = ''; // Clear Text
  };

  $scope.list = [
    'thing 1',
    'thing 2',
    'thing 3'
  ];
 
  $scope.deleteItem = function (index) { // function to delete items.
    $scope.list.splice(index, 1);
  }


});
