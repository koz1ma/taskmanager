'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:addTaskCtrl
 * @description
 * # addTaskCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('addTaskCtrl', function ($scope, $location, $window, $timeout , taskService) {
   		
   	$scope.addTask = function(task){
    	taskService.addTask(task, function (response){
    		$timeout(function(){
       			$window.alert(response.data.message);
    			$location.path('#/');
    		});
    	}, function (response){
    		$timeout(function(){
        		$window.alert(response);
    		});
        	
        });
    };

  });
