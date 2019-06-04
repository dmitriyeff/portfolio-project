'use strict';

angular
  .module('portfolioProject', ['ui.bootstrap', 'ngRoute'])

angular
  .module('portfolioProject')
  .filter('startFrom', function() {
    return function(data, start) {
      return data.slice(start);
    }
  });
