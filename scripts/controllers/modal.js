'use strict';

angular.module('portfolioProject')
  .controller('ModalCtrl', ['projectsInfo', function(view) {
    var mv = this;

    view.getProjects().then(function(response) {
      mv.items = response.data;
    });
  }]);
