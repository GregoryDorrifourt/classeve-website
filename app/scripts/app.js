'use strict';

/**
 * @ngdoc overview
 * @name classeveApp
 * @description
 * # classeveApp
 *
 * Main module of the application.
 */
angular
  .module('classeveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl'
      })
      .when('/particuliers', {
        templateUrl: 'views/particuliers.html',
        controller: 'ParticulierCtrl'
      })
      .when('/professionnels', {
        templateUrl: 'views/professionnels.html',
        controller: 'ProCtrl'
      })
      .when('/musique', {
        templateUrl: 'views/musique.html',
        controller: 'MusiqueCtrl'
      })
      .when('/tarifs', {
        templateUrl: 'views/tarifs.html',
        controller: 'TarifsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', function ($rootScope) {
    $rootScope.IMG_SET = "standard";
  }]);
