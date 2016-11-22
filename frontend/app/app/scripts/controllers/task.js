'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('TaskCtrl', function ($scope, $location, $window, $timeout, taskService)  {

  		$scope.editable = false;
  		taskService.getTasks(function(response){ 
  			$scope.tasks = response.data.tasks; 
  		  },function (response){
         	console.log(response); //mensagem de erro
        });

        $scope.editTask = function(task){
    		  taskService.editTask(task, function (response){
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

        $scope.deleteTask = function(id){
    		  taskService.deleteTask(id, function (response){
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
  }).directive('stringToNumber', function() { //criei essa diretiva porque o input:number tem um bug conhecido onde ele trata um numero do banco como string 
  	return {
    	require: 'ngModel',
    	link: function(scope, element, attrs, ngModel) {
      		ngModel.$parsers.push(function(value) {
        		return '' + value;
      		});
      		ngModel.$formatters.push(function(value) {
        		return parseFloat(value, 10);
      		});
   	 	}
  };
});
