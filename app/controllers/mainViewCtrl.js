'use strict';


angular.module('myApp').controller('mainViewCtrl', ['$scope', function($scope) {
  $scope.toggle = function(evt){
      evt.preventDefault();
      $(".sideCont").toggleClass('hidden');
      $(".mainCont").toggleClass('col-md-9');
      $(".mainCont").toggleClass('col-md-12');

  }
}]);
