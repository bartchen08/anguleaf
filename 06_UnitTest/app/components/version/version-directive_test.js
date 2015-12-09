'use strict';

describe('myApp.version module', function() {
  beforeEach(module('myApp.version'));

  describe('app-version directive1', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER'); // not necessarily override the existing value as 0.1
      });

      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });

  describe('app-version directive2', function() {
    var $compile;
    var $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('should print current version', function(){
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('0.1');
    });
  });
});
