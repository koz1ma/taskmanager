'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {

    //essas linha são para lidar com o CORS request
    //$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.post['Content-type'];
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common = {};
    //$httpProvider.defaults.headers.post = {};
    //$httpProvider.defaults.headers.put = {};
    //$httpProvider.defaults.headers.patch = {};
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl',
        controllerAs: 'task'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/addtask', {
        templateUrl: 'views/addtask.html',
        controller: 'addTaskCtrl',
        controllerAs: 'addtask'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
