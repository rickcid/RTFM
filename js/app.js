var app = angular.module('rtfmApp', ["firebase", "ngRoute"]); 

app.config(function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl: 'js/login/loginTmpl.html',
      controller: 'loginCtrl'//After this step automatically go and create the controller!!
    })
    .when('/threads', {
      templateUrl: 'js/threads/threadsTmpl.html',
      controller: 'threadsCtrl'//After this step automatically go and create the controller!!
    })
    .when('/threads/:threadId', {
      templateUrl: 'js/threads/threadsTmpl.html',
      controller: 'threadsCtrl' //Could do resolve as well resolve: { productData: function($route, productService){ return productService.getData($route/current.params.id);}}
    })
    .otherwise({
      redirectTo: '/login'
    })
});

