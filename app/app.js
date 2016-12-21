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

});
