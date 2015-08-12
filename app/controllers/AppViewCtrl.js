angular.module('myApp')
.controller("AppViewCtrl",["$scope",function($scope){
  alert("intialized");
  $scope.appName = "Galaxy";

}]);
