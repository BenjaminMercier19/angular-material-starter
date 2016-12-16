(function(){

  angular
       .module('main')
       .controller('MainController', [
          '$mdSidenav', '$location',
          MainController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function MainController( $mdSidenav, $location ) {
    var self = this;

    self.selected     = null;
    self.menus        = [
    {
      name: "Menu 1",
      route: "/menu1"
    },
    {
      name: "Menu 2",
      route: "/menu2"
    }];
    self.selectMenu   = selectMenu;
    self.toggleList   = toggleMenuList;
    self.isViewLoading = true;

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleMenuList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectMenu ( menu ) {
      self.selected = angular.isNumber(menu) ? self.menus[menu] : menu;
      $location.path(menu.route);

    }

  }

})();
