angular.module('myApp')
.controller('dashboardCtrl',['$scope','$location',function($scope,$location){
    $scope.openIssueView = function($event){
      debugger;
        $location.path('/issueView')

    }
}]);
