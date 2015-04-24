var app = angular.module('rtfmApp', ["firebase", "ngRoute"])

app.constant('fb', {
  url: 'https://amber-heat-1650.firebaseIO.com'
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'js/login/loginTmpl.html',
      controller: 'loginCtrl'//After this step automatically go and create the controller!!
    })
    .when('/threads', {
      templateUrl: 'js/threads/threadsTmpl.html',
      controller: 'threadsCtrl', //After this step automatically go and create the controller!!
      resolve: {
        threadsRef: function(threadService) {
          return threadService.getThreads();
        }
      }
    })
    .when('/thread/:threadId', {
      templateUrl: 'js/thread/threadTmpl.html',
      controller: 'threadCtrl', //Could do resolve as well resolve: { productData: function($route, productService){ return productService.getData($route/current.params.id);}}
      resolve: {
        commentsRef: function(threadService, $route) {
          return threadService.getComments($route.current.params.threadId);
        },
        threadRef: function(threadService, $route) {
          return threadService.getThread($route.current.params.threadId);
        }
      }
    })
    .otherwise({
      redirectTo: '/login'
    })
});

