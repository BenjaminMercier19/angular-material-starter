(function(){

  angular
       .module('menu1')
       .controller('Menu1Controller', [
          Menu1Controller
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function Menu1Controller( ) {
    var self = this;

    self.displayName     = "Menu1";
  }

})();
