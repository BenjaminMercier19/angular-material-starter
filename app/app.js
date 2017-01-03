angular
    .module('starterApp', ['ngMaterial', 'ngRoute', 'main', 'menu1', 'menu2', 'contracts'])
    .config(function($mdThemingProvider, $mdIconProvider, $routeProvider){

      $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);
      $mdIconProvider.fontSet('md', 'material-icons');

      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');
      //SET ROUTING
      $routeProvider
      	.when('/contracts', {
          templateUrl: '/app/src/contracts/contracts.html'
        })
        .when('/menu2', {
          templateUrl: '/app/src/menu2/menu2.html'
        })
        .otherwise({
          redirectTo: '/menu2',
        });
        //$locationProvider.html5Mode(true);

});
