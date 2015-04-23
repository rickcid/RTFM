var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $routeParams) {
console.log('loginCtrl: routeParams', $routeParams);

$scope.logMeIn = function() {
  alert($scope.username);
}
$scope.name = "rick";

});