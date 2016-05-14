// create the module of the app
var myApp =   angular.module('Blueprinnt',['ngRoute', 'ngAnimate']);

//create the navigation controller
myApp.controller('navController', function ($scope){});
//create the validation controller
myApp.controller('validationController', function ($scope){
    // function to submit the form
    $scope.submitForm = function(isValid){
      //check to make sure that form is completely valid
      if(isValid){
          $scope.response = 'Your form is submited susscssfuly';
//            alert('Thanks');
      }
      else{
          $scope.response = '';
      }
    };
});


//Define route for site
Blueprint.config(['$routeProvider',function ($routeProvider){
        $routeProvider
                .when('/',{
                    title: 'home',
                    templateUrl: 'views/index.html'
                })
                .when('/profile',{
                    title: 'profile',
                    templateUrl: 'views/profile.html'
                })
                .when('/contact',{
                    title: 'contact',
                    templateUrl: 'view/contact.html'
                })
                .when('/portfolio',{
                    title: 'portfolio',
                    templateUrl: 'views/portfolio.html'
                })
                .otherwise({
                    redirectTo: 'home/index.html'
                });
    }]);
