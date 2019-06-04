'use strict';

angular.module('portfolioProject')
  .controller('ProjectCtrl', ['projectsInfo', function(info) {
    var vm = this;
    vm.pageSize = 6;
    vm.currentPage = 1;

    info.getProjects().then(function(response) {
      vm.items = response.data;
    });

    vm.addCustomClass = function() {
       angular.element(document.querySelector(".pagination")).addClass("customClass");
    }
  }]);
