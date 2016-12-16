(function(){

  angular
       .module('menu2')
       .controller('Menu2Controller', [
          Menu2Controller
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function Menu2Controller( ) {
    var self = this;

    self.displayName     = "Menu2";
  }

})();
