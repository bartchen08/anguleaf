'use strict';

describe('myApp.version module', function() {
  beforeEach(module('myApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) { // inject provider service named as version
      expect(version).toEqual('0.1');
    }));
  });
});
