'use strict';

angular
  .module('portfolioProject')
  .controller('ProjectCtrl', ['projectsInfo', function(info) {
    var vm = this;

    info.getProjects().then(function(response) {
      vm.items = response.data;

      // vm.items.forEach(function(item) {
      //   console.log(item.id);
      // });
    });

  }]);
