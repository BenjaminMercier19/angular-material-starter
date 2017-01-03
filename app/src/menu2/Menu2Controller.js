(function(){

  angular
       .module('menu2')
       .controller('Menu2Controller', ['$scope',
          Menu2Controller
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function Menu2Controller($scope) {
    var self = this;

    self.displayName     = "Testing menu display";
    $scope.main.isViewLoading = true;

  }

})();
