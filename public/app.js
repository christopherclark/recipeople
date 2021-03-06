angular.module('Recipeoples', [
	'ngRoute', 
	'Recipeoples.landing', 
	'Recipeoples.recipe', 
	'Recipeoples.profile'])

.controller('AppCtrl', function($scope){
  $scope.hello = "hello world"
})

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/landing', {
      templateUrl: 'public/landing/landing.html',
      controller: 'LandingController'
    })
    .when('/recipes', {
      templateUrl: 'public/recipes/recipes.html',
      controller: 'ProfileController'
    })
    .when('/profile', {
      templateUrl: 'public/profile/profile.html',
      controller: 'ProfileController'
    })
     .otherwise({
      redirectTo: '/landing'
    })
})