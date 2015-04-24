var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, threadRef, $firebaseObject, $firebaseArray, commentsRef) {
  var thread = $firebaseObject(threadRef);

  thread.$bindTo($scope, 'thread');

  $scope.comments = $firebaseArray(commentsRef);

  $scope.createComment = function(text) {
    $scope.comments.$add({
      text: text
    });
  };

});