var app = angular.module('rtfmApp');

app.service('threadService', function(fb) {

this.getThreads = function() {
  return new Firebase(fb.url);
}

this.getThread = function(threadId) {
  return new Firebase(fb.url + "/threads/" + threadId)
}

this.getComments = function(threadId) {
  return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));
}

});