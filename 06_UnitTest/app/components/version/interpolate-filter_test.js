'use strict';

describe('myApp.version module', function() {
  beforeEach(module('myApp.version'));

  describe('interpolate filter1', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER'); // override provider service as version
    }));

    it('should replace VERSION', inject(function(interpolateFilter) { // inject filter named as interpolate + Filter
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });

  describe('interpolate filter2', function() {
    var $filter;

    beforeEach(inject(function(_$filter_){
      $filter = _$filter_;
    }));

    it('should replace VERSION', function() {
      var iFilter = $filter('interpolate');// instanciate filter through angular $filter service
      expect(iFilter('before %VERSION% after')).toEqual('before 0.1 after');
    });
  });
});
