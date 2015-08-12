'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]);

angular.module('myApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/mainView.html',
    controller: 'AppViewCtrl'
  })
  .when('/issueView',{
    templateUrl: 'templates/issueBoard.html',
    controller: 'issueViewCtrl'
  })
  ;
}])
.controller('AppCtrl',['$scope',function(){

}])
