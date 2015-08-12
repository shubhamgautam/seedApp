describe('AppViewCtrl', function () {
  var controller = null;
  debugger;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('AppViewCtrl', {
      $scope: $scope
    });
  }));

  it('should intialize appview controller', inject(function($controller) {
        expect(controller).toBeDefined();
  }));


    it('should intialize with appName', inject(function($controller) {
          expect($scope.appName).toEqual("Galaxy");
    }));




});
