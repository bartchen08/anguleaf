'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) { // inject provider service named as version
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version); // get version value, to replace string %VERSION%
  };
}]);
