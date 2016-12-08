angular.module('sortingApp.sort', [])
.controller('sortingCtrl', ['$scope', 'sortingService',
 function($scope, sortingService) {
  $scope.sortWords = function(words){
    $scope.returnSort = sortingService.sortedWords(words)
  }
 }]);