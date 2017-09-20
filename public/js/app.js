var app = angular.module('changeCalculatorApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../index.html',
      controller: 'changeCalculatorController'
    });
});
