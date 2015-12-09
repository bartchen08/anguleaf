'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2')); // get hold of module

  var $ctrl;
  beforeEach(inject(function(_$controller_){
    // inject any Angular System services here
    $ctrl = _$controller_; // get hold of system $controller service
  }));

  describe('view2 controller tests', function(){
    it('view2 controller test1', function() {
      //spec body
      console.log('Nothing, just testing view2. haha');
      var $scope = {};
      var view2Ctrl = $ctrl('View2Ctrl', {$scope : $scope}); // instanciate view2ctrl
      expect(view2Ctrl).toBeDefined();
      expect($scope.userName).toEqual('BartUser2');
    });
  });
});