'use strict';

angular.module('portfolioProject', ['ui.bootstrap'])
  .filter('startFrom', function() {
    return function(data, start) {
      return data.slice(start);
    }
  });

angular.module('portfolioProject')
