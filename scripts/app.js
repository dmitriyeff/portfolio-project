'use strict';

angular
  .module('portfolioProject', ['ui.bootstrap'])

angular
  .module('portfolioProject')
  .filter('startFrom', function() {
    return function(data, start) {
      return data.slice(start);
    }
  });
