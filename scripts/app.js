'use strict';

angular
  .module('portfolioProject', ['ui.bootstrap', 'ngRoute'])
  .filter('startFrom', function() {
    return function(data, start) {
      return data.slice(start);
    }
  });
