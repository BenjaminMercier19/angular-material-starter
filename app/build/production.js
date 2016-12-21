(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('main', [ 'ngMaterial' ]);


})();

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

(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('menu1', [ 'ngMaterial' ]);


})();

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

(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('menu2', [ 'ngMaterial' ]);


})();

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

(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();

angular
    .module('starterApp', ['ngMaterial', 'ngRoute', 'main', 'menu1', 'menu2'])
    .config(function($mdThemingProvider, $mdIconProvider, $routeProvider){

      $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);
      $mdIconProvider.fontSet('md', 'material-icons');

      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('green');
      //SET ROUTING
      $routeProvider
      	.when('/menu1', {
          templateUrl: '/app/src/menu1/menu1.html'
        })
        .when('/menu2', {
          templateUrl: '/app/src/menu2/menu2.html'
        })
        .otherwise({
          redirectTo: '/menu1',
        });
        //$locationProvider.html5Mode(true);
        if

});
