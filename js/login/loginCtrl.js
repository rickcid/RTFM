var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $routeParams, userService, $location) {
console.log('loginCtrl: routeParams', $routeParams);

$scope.logMeIn = function() {
  alert($scope.username);
  $location.path('/threads')
}



});