'use strict';

angular.module('portfolioProject')
  .service('projectsInfo', function ($http) {
    this.getProjects = function() {
      return $http.get('/projects/projects.json');
    };
  });
